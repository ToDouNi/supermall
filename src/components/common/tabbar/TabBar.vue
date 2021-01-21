<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.1);
  background: #f6f6f6;
}

</style>
