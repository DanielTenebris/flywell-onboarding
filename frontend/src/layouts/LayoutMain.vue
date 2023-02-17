<template>
  <div id="layoutMain">
    <div class="header">
      <div>Песочница</div>
      <div>|</div>

      <router-link to="/test1" class="link">
        <Icon icon="bx:alarm" />
        <span>Zадание</span>
      </router-link>

      <router-link to="/test2" class="link">
        <Icon icon="bx:basket"/>
        <span>TestTwo</span>
      </router-link>

    </div>

    <router-view class="routerView"/>
  </div>
</template>


<script setup>
import { Icon } from '@iconify/vue';

</script>


<style lang="scss" scoped>
$headerHeight: 35px;


#layoutMain {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header {
    height: $headerHeight;
    background-color: #000000;
    position: fixed;
    width: 100%;
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    gap: 18px;
  }

  .routerView {
    margin-top: $headerHeight;
  }

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    &:hover {
      text-decoration: none;
      color: #ff8000;
    }
  }
}

</style>
