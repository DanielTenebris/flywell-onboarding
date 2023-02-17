<template>
  <div id="layoutMobile">
    <div class="content">
      <router-view class="routerView"></router-view>
    </div>
    <BottomNavMenu class="bottomNavMenu"></BottomNavMenu>
  </div>
</template>


<script setup>
import BottomNavMenu from "@/layouts/mobile/BottomNavMenu.vue";
</script>


<style lang="scss" scoped>
$bottomNavMenuHeight: 55px;

#layoutMobile {
  height: 100vh;
  width: 100vw;

  .content {
    padding-bottom: $bottomNavMenuHeight;
  }

  .routerView {
  }

  .bottomNavMenu {
    height: $bottomNavMenuHeight;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }

}
</style>
