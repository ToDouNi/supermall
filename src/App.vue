<template>
  <div id="app">
    <router-view />
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url('assets/css/base.css');
/* html,body{overflow:hidden;overflow-y:auto;} */
#app{
  color:var(--color-text);
}
</style>
