<template>
  <div class="_mp" style="padding-left: 0; padding-right: 0" id="pageMobileRoadmap">
    <h1 style="margin-bottom: 0;" class="pl">Твой план</h1>
    <div class="caption pl">
      У тебя будет какая-то тактика и ты будешь её придерживаться!
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
        initialSlide="1"
    >
      <swiper-slide
          class="slide"
          v-for="slide in slides"
          :key="slide.title"
          :style="{'opacity': slide.status === 'lock' ? '0.5' : '1'}"
      >
        <div class="title">
          {{slide.title}}
        </div>

        <div class="desc">
          {{slide.desc}}
        </div>

        <div class="est">
          <div class="inner">
            <Icon class="icon" icon="bx:alarm" />
            <div>{{slide.est}}</div>
          </div>
          <div style="flex: 1"/>
        </div>

        <div style="flex: 1" />

        <div :class="['status', slide.status]">
          <template v-if="slide.status === 'done'">
            <Icon class="icon" icon="bx:check" />
            <div class="text">Пройдено!</div>
          </template>

          <template v-if="slide.status === 'wip'">
            <button class="appButton lime btnGo" @click="$router.push('/lesson/1')">
              <span class="text">Изучить</span>
              <Icon class="icon" icon="bx:chevron-right" />
            </button>
          </template>

          <template v-if="slide.status === 'lock'">
            <Icon class="icon" icon="bx:lock" />
            <div class="text">Заблокирован</div>
          </template>
        </div>
      </swiper-slide>
    </swiper>

    <h2 class="pl">Изученные материалы</h2>
    <div class="mats pl">
      <div class="mat" v-for="mat in mats" :key="mat.title">
        <div class="title">{{mat.title}}</div>
        <div class="tags">
          <div class="appTag localTag" v-for="tag in mat.tags">{{tag}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css';
import {Icon} from "@iconify/vue";

const modules = [EffectCoverflow, Pagination];

const slides = [
  {
    title: 'Добро пожаловать в РосМолодёжь!',
    desc: 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет выполнять важные задания по разработке форм развития.',
    est: '4 минуты',
    status: 'done'
  },
  {
    title: 'Структура компании',
    desc: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требуют определения и уточнения существенных финансовых и административных условий.',
    est: '13 минут',
    status: 'wip',
  },
  {
    title: 'Вознаграждения и премии',
    desc: ' Повседневная практика показывает, что начало повседневной работы по формированию позиции требуют от нас анализа форм развития.',
    est: '7 минут',
    status: 'lock',
  },
  {
    title: 'Твои инструкции',
    desc: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития.',
    est: '22 минуты',
    status: 'lock',
  },
]

const mats = [
  {title: 'Место обучения', tags: ['Офис', 'Инструкция']},
  {title: 'Кадров требуют от нас анализа соответствующий условий активизации', tags: ['Отпуск']},
  {title: 'Равным образом новая модель организационной', tags: ['Компания', 'Структура', 'Важно']},
  {title: 'С другой стороны', tags: ['Офис', 'Инструкция', 'Компания', 'Структура']},
  {title: 'Количественный', tags: ['Инструкция']},
  {title: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности способствует подготовки и реализации новых предложений', tags: ['Руководство', 'Офис', 'Инструкция']},
]
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileRoadmap {
  .pl {
    padding-left: 12px;
  }

  .caption {
    font-size: 14px;
    max-width: 70vw;
    margin-top: 2px;
    opacity: 0.9;
    font-weight: 500;
  }

  .swiper {
    padding: 20px;
  }

  .slide {
    height: 330px;
    width: 75vw;
    background-color: white;
    border-radius: $borra;
    border: 1px solid $color-grey;

    -webkit-box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 19px 0px rgba(34, 60, 80, 0.2);

    background-image: url("@/features/mobile/roadmap/bg.png");
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 220px;

    display: flex;
    flex-direction: column;
    padding: 12px;
    justify-content: start;

    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.0em;
    }

    .desc {
      padding-top: 6px;
      opacity: 0.7;
      font-size: 15px;
    }

    .est {
      display: flex;

      .inner {
        display: flex;
        align-items: center;
        gap: 4px;

        margin-top: 12px;
        padding: 4px 8px;
        font-weight: 500;
        color: white;
        font-size: 12px;
        background-color: $color-purple;
        border-radius: $borra;

        .icon {
          font-size: 14px;
        }
      }
    }

    .status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;

      &.done {
        color: $color-green;
      }

      &.wip {
        color: $color-orange;
      }

      &.lock {
        color: #6b6b6b;
      }

      .icon {
        font-size: 14px;
      }

      .text {
        font-size: 14px;
        font-weight: 600;
      }
    }

    .btnGo {

      .text {
        padding-left: 6px;
      }

      .icon {
        font-size: 22px;
        margin-left: 2px;
      }
    }
  }



  .mats {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .mat {
      padding-top: 4px;
      padding-bottom: 10px;
      border-bottom: 1px solid #dedede;

      .title {
        display: inline;
        font-weight: 500;
        margin-right: 8px;
        font-size: 15px;
      }

      .tags {
        display: inline;

        .localTag {
          font-size: 10px;
          padding: 2px 5px;
          margin-right: 4px;
          font-weight: 600;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
