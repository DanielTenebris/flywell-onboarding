<template>
  <div class="_mp" style="padding-left: 0; padding-right: 0" id="pageMobileRoadmap">
    <h1 style="margin-bottom: 0; padding-left: 12px">Твой план</h1>
    <div class="caption">

    </div>

    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide class="slide" v-for="slide in slides" :key="slide.title">
<!--        <div class="slide">-->
          {{slide.title}}
<!--        </div>-->
      </swiper-slide>
    </swiper>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css';

const modules = [EffectCoverflow, Pagination];

const slides = [
  {
    title: 'Макака',
  },
  {
    title: 'Поми',
  },
  {
    title: 'ВЫФА',
  },
  {
    title: 'ыва',
  },
]
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileRoadmap {
  .swiper {
    padding: 20px;
  }

  .slide {
    height: 300px;
    width: 75vw;
    background-color: white;
    border-radius: $borra;
    border: 1px solid $color-grey;

    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);
  }
}
</style>
