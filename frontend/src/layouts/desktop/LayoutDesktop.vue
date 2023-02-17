<template>
  <div id="layoutDesktop">
    <AsideNavMenu class="asideNavMenu"></AsideNavMenu>

    <router-view class="routerView"></router-view>
  </div>
</template>


<script setup>

import AsideNavMenu from "@/layouts/desktop/AsideNavMenu.vue";
</script>


<style lang="scss" scoped>
$asideNavMenuWidth: 320px;

#layoutDesktop {
  .asideNavMenu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: $asideNavMenuWidth;
  }

  .routerView {
    padding-left: $asideNavMenuWidth;
  }
}
</style>
