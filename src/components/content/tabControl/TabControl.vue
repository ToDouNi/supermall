<template>
  <div id="tab-control">
    <div
      class="tab-control-item"
      @click="activeTab(index)"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    activeTab(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
#tab-control {
  display: flex;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  background:#fff;
  height: 40px;
}
.tab-control-item {
  flex: 1;
}
.active span {
  padding: 2px 10px;
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>