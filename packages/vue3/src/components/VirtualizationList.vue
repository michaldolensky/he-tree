<template lang="pug">
.VirtualizationList.virtualization-list(@scroll.passive="update")
  component.vl-items(:is="listTag" :class="listClass" :style="enabled && {paddingTop: top + 'px',paddingBottom: bottom + 'px',height: totalHeight + 'px'}")
    template(v-for="(info, i) in visibleItems" :key="info.item.$id")
      slot(:item="info.item" :index="info.index" :renderIndex="i" :itemStyle="{marginBottom: gap+'px'}")
</template>

<script lang="ts">
import { defineComponent, PropType, nextTick } from "vue";
import { obj } from "../types";
import * as hp from "helper-js";

export default defineComponent({
  props: {
    items: { type: Array as PropType<obj[]>, default: () => [] },
    enabled: { type: Boolean, default: true },
    buffer: {
      type: Number,
      default: 200,
    },
    minItemHeight: { type: Number, default: 20 },
    prerender: { type: Number, default: 20 },
    listTag: { type: String, default: "div" },
    listClass: { type: String },
    itemClass: { type: String, default: "vl-item" },
    gap: { type: Number, default: 0 },
    afterCalcTop2: { type: Function as PropType<(top2: number) => number> },
    isForceVisible: {
      type: Function as PropType<(node: obj, index: number) => boolean>,
    },
  },
  data() {
    return {
      start: 0,
      end: -1,
      top: 0,
      bottom: 0,
      totalHeight: 0,
      itemsHeight: <number[]>[],
      mountedPromise: new Promise((resolve, reject) => {
        this._mountedPromise_resolve = resolve;
      }),
    };
  },

  computed: {
    visibleItems(): { item: obj; index: number }[] {
      const r: { item: obj; index: number }[] = [];
      this.items.forEach((item: obj, index: number) => {
        if (!this.enabled) {
          r.push({ item, index });
        } else if (
          (index >= this.start && index <= this.end) ||
          (this.isForceVisible && this.isForceVisible(item, index))
        ) {
          r.push({ item, index });
        }
      });
      return r;
    },
  },
  watch: {
    enabled: {
      immediate: true,
      handler() {
        if (!this.enabled) {
          // @ts-ignore
          this.totalHeight = undefined;
        }
      },
    },
  },
  methods: {
    getItemElHeight(el: HTMLElement) {
      return hp.getBoundingClientRect(el).height + this.gap;
    },
    update() {
      const task = async () => {
        if (!this.enabled) {
          this.start = 0;
          this.end = this.items.length;
          return;
        }
        await this.mountedPromise;
        let existingHeight = 0;
        let i = 0;
        for (const child of this.$el.querySelector(".vl-items")!.children) {
          if (
            (child.style.position === "" || child.style.position == null) &&
            child.style.display !== "none"
          ) {
            i++;
            const index = parseInt(child.getAttribute("data-vindex"));
            this.itemsHeight[index] = this.getItemElHeight(
              child as HTMLElement
            );
            existingHeight += this.itemsHeight[index];
          }
        }
        const avgHeight = existingHeight / i || this.minItemHeight;
        let { buffer, itemsHeight, items } = this;
        const { clientHeight, scrollTop } = this.$el;
        let start = 0,
          top = 0;
        const maxIndex = items.length - 1;
        const topSpace = hp.notLessThan(scrollTop - buffer, 0);
        while (top < topSpace && start <= maxIndex) {
          const newTop = top + (itemsHeight[start] || avgHeight);
          if (newTop > topSpace) {
            break;
          }

          top = newTop;
          start++;
        }
        let top2 = top;
        let end = start;
        if (this.afterCalcTop2) {
          top2 = this.afterCalcTop2(top2);
        }
        while (top2 < scrollTop + clientHeight + buffer && end <= maxIndex) {
          top2 += itemsHeight[end] || avgHeight;
          end++;
        }
        let bottom = 0;
        for (let index = end + 1; index < items.length; index++) {
          bottom += itemsHeight[index] || avgHeight;
        }
        const totalHeight = top2 + bottom;
        this.start = start;
        this.end = end;
        this.top = top;
        this.bottom = bottom;
        if (
          this.totalHeight == null ||
          scrollTop + clientHeight > this.totalHeight - buffer ||
          Math.abs(this.totalHeight - totalHeight) > 100
        ) {
          if (this.totalHeight !== totalHeight) {
            this.totalHeight = totalHeight;
          }
        }

        const waitDOMUpdated = () => {
          // eslint-disable-next-line no-async-promise-executor
          return new Promise(async (resolve, reject) => {
            await nextTick();
            // every 5 ms, max 10 times
            await hp
              .waitFor(
                () => {
                  let startEl, endEl, startIndex, endIndex;
                  startEl = this.$el.querySelector(
                    `.${this.itemClass}[data-v-render-index="0"]`
                  );
                  endEl = this.$el.querySelector(
                    `.${this.itemClass}[data-v-render-index="${
                      this.visibleItems.length - 1
                    }"]`
                  );
                  if (startEl && endEl) {
                    startIndex = parseInt(startEl.getAttribute("data-vindex")!);
                    endIndex = parseInt(endEl.getAttribute("data-vindex")!);
                    return startIndex == this.start && endIndex === this.end;
                  }
                  return false;
                },
                5,
                10
              )
              .promise.then((x) => {
                //
                // console.log("success to wait DOM updated");
              })
              .catch((error) => {
                //
                // console.warn("failed to wait DOM updated");
              });
            resolve(undefined);
          });
        };
        await waitDOMUpdated();
        // @ts-ignore
        if (this._waitingUpdate) {
          // @ts-ignore
          const next = this._waitingUpdate;
          if (next !== task) {
            next();
          } else {
            // @ts-ignore
            this._waitingUpdate = undefined;
          }
        }
      };
      // @ts-ignore
      if (!this._waitingUpdate) {
        // @ts-ignore
        this._waitingUpdate = task;
        task();
      } else {
        // @ts-ignore
        this._waitingUpdate = task;
      }
    },
  },
  created() {
    this.bottom = this.prerender - 1;
  },
  mounted() {
    // @ts-ignore
    this._mountedPromise_resolve!(null);
    let updatedOnce = false;
    this.$watch(
      () => [this.items],
      () => {
        this.itemsHeight = [];
        nextTick(() => {
          this.update();
          if (!updatedOnce) {
            this.update();
          }
          updatedOnce = true;
        });
      },
      { immediate: true }
    );
    this.$watch(
      () => [this.buffer],
      () => {
        this.update();
      }
    );
  },
});
</script>

<style lang="scss">
.vl-items {
  overflow: hidden;
  box-sizing: border-box;
}
</style>
