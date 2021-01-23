<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '热门']"
        @tabClick="tabClick"
      />

      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script type = 'text/ecmascript-6'>
/**
 * 公共组件
 */
//common
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

//content
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
/**
 * 页面子组件
 */
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

/**
 * 网络请求
 */
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeGoods from "assets/data/HomeGoods.json";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentValue: "pop",
      isBackTopShow: false,
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    this.getHomeGoods();
  },
  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.currentValue].list;
    },
  },
  methods: {
    /**
     * 网络请求方法
     */
    getHomeGoods() {
      this.goods.pop.list = HomeGoods.pop.list;
      this.goods.news.list = HomeGoods.news.list;
      this.goods.sell.list = HomeGoods.sell.list;
    },

    /**
     * 事件鉴定方法
     */
    tabClick(index) {
      if (index === 0) {
        this.currentValue = "pop";
      } else if (index === 1) {
        this.currentValue = "news";
      } else {
        this.currentValue = "sell";
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isBackTopShow = position.y < -1000;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  width: 100%;
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
