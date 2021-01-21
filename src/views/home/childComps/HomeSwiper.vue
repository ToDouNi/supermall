<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <img :src="item.image" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script type = 'text/ecmascript-6'>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped lang='scss'>
</style>
