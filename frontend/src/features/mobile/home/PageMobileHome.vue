<template>
  <div id="pageMobileHome">
    <div id="for_lbl">
      <div id="label">
        label
      </div>
    </div>
    <div id="otstup">
      <div id="profile_data">
        <div id="pr_photo">
          <img :src='require("@/features/mobile/home/profile.png")' />
        </div>
        <div class="text">
          <div class="utro">
            Доброе утро!
          </div>
          <div class="name">
            Иван Иванов 🤘
          </div>
        </div>
        <div id="colocol">
          <Icon id=icon icon="bx:bell"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {Icon} from "@iconify/vue/dist/iconify";
</script>


<style lang="scss" scoped>
@import "@/styles.scss";
$grey_color: #9DA5A7;
$black_color:#000000;
#pageMobileHome {
  display: flex;
  flex-direction: column;

  #for_lbl {
    #label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  #otstup {
    padding: 16px;
    #profile_data {
      display: flex;
      flex-direction: row;
      align-items: center;
      #pr_photo{
        height: 57px;
        width: 57px;
        background-color: #DAEF14;
        border-radius: 30px;
      }
      #colocol{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 57px;
        width: 57px;
        border: solid 1px $grey_color;
        border-radius: 30px ;
        #icon{

          height: 24px;
          width: 24px;
          color: $black_color;
          opacity: 0.6;
        }
      }
      .text{
        flex:2;
        padding-left: 14px;
        .utro{
          color: $grey_color;
          font-size: 14px;
        }
        .name{
          color: $black_color;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
