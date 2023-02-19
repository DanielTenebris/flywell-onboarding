<template>
  <div id="asideNavMenu">
    <div class="top">

      <!--      <div class="profile">-->
      <!--        <div class="photo">-->

      <!--        </div>-->
      <!--        <div class="name">-->
      <!--          Вероника Степанова-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="logo">
        <img :src='require("@/layouts/desktop/logo2023_2lines 4.svg")'/>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('/employees')}" @click="$router.push('/employees')">
        <div class="img">
          <img :src='require("@/layouts/desktop/profile2user.svg")'/>
        </div>
        <div class="link">
          Сотрудники
        </div>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('/roadmaps')}" @click="$router.push('/roadmaps')">
        <div class="img">
          <img :src='require("@/layouts/desktop/Vector.svg")'/>
        </div>
        <div class="link">
          Роадмапы
        </div>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('/lessons')}" @click="$router.push('/lessons')">
        <div class="img">
          <img :src='require("@/layouts/desktop/teacher.svg")'/>
        </div>
        <div class="link">
          Задания
        </div>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('/materials')}" @click="$router.push('/materials')">
        <div class="img">
          <img :src='require("@/layouts/desktop/note.svg")'/>
        </div>
        <div class="link">
          Материалы
        </div>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('#')}" @click="$router.push('/tests')">
        <div class="img">
          <img :src='require("@/layouts/desktop/test.svg")'/>
        </div>
        <div class="link">
          Тесты
        </div>
      </div>

      <div :class="{'for_link': true, 'selected': isSelected('#')}" @click="$router.push('/notifications')">
        <div class="img">
          <img :src='require("@/layouts/desktop/messages2.svg")'/>
        </div>
        <div class="link">
          Уведомления
        </div>
      </div>

    </div>


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
const isSelected = (path) => {
  return route.path === path
}

</script>


<style lang="scss" scoped>
@import "@/styles.scss";

$black_color: #1C1C1C;
$grey: #00000066;
#asideNavMenu {

  background-color: white;
  //-webkit-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  //-moz-box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);
  //box-shadow: 0px 4px 69px 2px rgba(34, 60, 80, 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right-style:  solid ;
  border-right-color: rgba(157,165,167,0.45);
  border-right-width:1px;

  .top {
    display: flex;
    flex-direction: column;


    .logo {
      padding: 24px 20px;
      height: 48px;

    }

    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;

      .photo {
        border-radius: 20px;
        height: 24px;
        width: 24px;
        background-color: $color-purple;
        margin-right: 8px;

      }

      .name {
        color: $black_color;
        font-size: 14px;
        font-weight: 400;
      }


    }

    .grey {
      padding-top: 24px;
      color: $grey;
      opacity: 0.8;
      font-size: 14px;
      font-weight: 600;
    }

    .for_link {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 16px;
      padding-left: 20px;
      cursor: pointer;

      border-left: 5px solid white;
      &.selected {
        border-left: 5px solid $color-primary;
      }

      .link {
        color: $black_color;
        font-size: 14px;
        font-weight: 600;

      }

      .img {
        width: 24px;
        height: 24px;
        padding-right: 15px;
      }

    }

  }

  //.center {
  //  flex: 1;
  //
  //  .items {
  //    display: flex;
  //    flex-direction: column;
  //
  //    .item {
  //      display: flex;
  //      align-items: center;
  //      justify-content: start;
  //      padding: 12px 20px;
  //      gap: 10px;
  //      color: #484848;
  //
  //      &:hover {
  //        cursor: pointer;
  //        color: black;
  //      }
  //
  //      &.selected {
  //        color: $color-primary;
  //      }
  //
  //      .icon {
  //        font-size: 20px;
  //      }
  //    }
  //
  //  }

}


</style>
