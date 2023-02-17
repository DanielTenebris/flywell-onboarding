<template>
  <div id="bottomNavMenu">
    <div style="flex: 1" />
    <router-link :to="item.path" :class="{'item': true, 'selected': isSelected(item)}" v-for="item in items" :key="item.title">
      <Icon class="icon" :icon="item.icon"/>
      <div class="title">{{item.title}}</div>
    </router-link>
    <div style="flex: 1" />
  </div>
</template>


<script setup>
import {Icon} from "@iconify/vue";
import {useRoute} from "vue-router";

const items = [
  {
    title: 'Главная',
    icon: 'bx:home',
    path: '/',
  },
  {
    title: 'План',
    icon: 'bx:map-alt',
    path: '/roadmap',
  },
  {
    title: 'Знания',
    icon: 'bx:brain',
    path: '/library',
  },
];

const route = useRoute();
const isSelected = (item) => {
  return route.path === item.path
}
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#bottomNavMenu {
  background-color: white;
  -webkit-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #a2a2a2;
    flex: 4;
    height: 100%;

    &.selected {
      color: $color-primary;
    }
  }

  .icon {
    font-size: 22px;
    padding-bottom: 2px;
  }

  .title {
    font-size: 11px;
  }
}
</style>
