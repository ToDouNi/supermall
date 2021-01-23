<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        probeType: this.probeType,
      });

      this.scroll.scrollTo(0, 0);
      this.scroll.on("scroll", (pos) => {
        this.$emit('scroll',pos);
      });
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>