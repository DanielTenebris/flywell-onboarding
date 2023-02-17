<template>
  <div id="asideNavMenu">
    <div class="top">
      <img class="img" src="https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
      <div class="text"></div>
    </div>

    <div class="center">
      <div class="items">
        <router-link :to="item.path" :class="{'item': true, 'selected': isSelected(item)}" v-for="item in items">
          <Icon class="icon" :icon="item.icon" />
          <div class="text">{{item.title}}</div>
        </router-link>
      </div>
    </div>

    <div class="bottom">bottom</div>
  </div>
</template>


<script setup>
import {useRoute} from "vue-router";
import {Icon} from "@iconify/vue";

const items = [
  {
    title: 'Дашборд',
    icon: 'bx:home',
    path: '/dashboard',
  },
  {
    title: 'Дашборд',
    icon: 'bx:home',
    path: '/dashboard2',
  },
];

const route = useRoute();
const isSelected = (item) => {
  return route.path === item.path
}
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#asideNavMenu {
  background-color: white;
  -webkit-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;

    .img {
      height: 30px;
    }
  }

  .center {
    flex: 1;

    .items {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 12px 20px;
        gap: 10px;
        color: #484848;

        &:hover {
          cursor: pointer;
          color: black;
        }

        &.selected {
          color: $color-primary;
        }

        .icon {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
