<!--  -->
<template>
  <div class="goods-list">
    <goods-list-item
      class="goods-list-item"
      :good="item"
      v-for="(item, index) in goods"
      :key="index"
    />
  </div>
</template>

<script type = 'text/ecmascript-6'>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods-list {
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-list:after{
	content:' ';
	width:48%;
	height:0;
	display:block;
}
</style>
