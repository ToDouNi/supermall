<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script type = 'text/ecmascript-6'>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      console.log(this.recommends);
    });
  },
  components: {
    NavBar,
    HomeSwiper,
  },
};
</script>

<style scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
