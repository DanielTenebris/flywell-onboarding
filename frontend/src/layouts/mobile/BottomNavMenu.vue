<template>
  <div id="bottomNavMenu">
    <div :class="{'item': true, 'selected': isSelected(item)}" v-for="item in items" :key="item.title">
      <Icon class="icon" :icon="item.icon"/>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>


<script setup>
import {Icon} from "@iconify/vue";
import {useRoute} from "vue-router";

const items = [
  {
    title: 'Главная',
    icon: 'bx:accessibility',
    path: '/mobile',
  },
  {
    title: 'План',
    icon: 'bx:accessibility',
    path: '/roadmap',
  },
  {
    title: 'Знания',
    icon: 'bx:accessibility',
    path: '/knowledge',
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

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #a2a2a2;

    &.selected {
      color: $color-primary;
    }
  }

  .icon {
    font-size: 22px;
  }

  .title {
    font-size: 11px;
  }
}
</style>
