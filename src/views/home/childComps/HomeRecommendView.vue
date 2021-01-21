<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.key">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data(){
    return {

    }
  },
};
</script>

<style scoped>
.recommend{
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  text-align: center;
  flex:1;
}
.recommend-item img{
  margin-bottom: 10px;
  width: 80%;
}
</style>