<!--  -->
<template>
  <div class="goods-list-item">
    <img :src="good.image" alt="" />
    <p>{{ good.title }}</p>
  </div>
</template>

<script type = 'text/ecmascript-6'>
export default {
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

.goods-list-item {
  width: 48%;
}
.goods-list-item img {
  width: 100%;
}
.goods-list-item p {
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp:1;
  text-align: center;
  overflow:hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 20px;
}
</style>
