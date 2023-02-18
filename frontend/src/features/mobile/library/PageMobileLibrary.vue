<template>
  <div class="_mp" id="pageMobileLibrary">
    <h1>Библиотека знаний</h1>

    <div class="search">
      <input v-model="search" class="inputSearch" placeholder="Поиск" />
      <button v-if="search" class="appButton primary">Искать</button>
    </div>

    <h2>Популярные теги</h2>
    <div class="tags">
      <div class="appTag" v-for="tag in tags" :key="tag">{{tag}}</div>
    </div>

    <button class="appButton primary btnShowHr" @click="showHr = !showHr">
      <template v-if="showHr">Скрыть контакты наставников</template>
      <template v-else>Показать контакты наставников</template>
    </button>
    <div class="hr" v-if="showHr">
      <b>Петрова Анна Николаевна,</b> HR служба<br />8 800 555 3535, внутренний: 0-10<br /><br />
      <b>Халтурин Эдуард Рудольфович,</b> технический руководитель<br />telegram: @dvegasa, внутренний: 2-69<br /><br />
      <b>Трофимова Надежда Дмитриевна,</b> вице-президент<br />vp@example.com
    </div>

    <h2>Категории</h2>
    <div class="categories">
      <div class="category" v-for="cat in categories" :key="cat.title">
        <div class="img" alt="" :href="cat.img" ></div>
        <div class="text">
          <div class="title">{{cat.title}}</div>
          <div class="subtitle">{{cat.subtitle}}</div>
        </div>
      </div>
    </div>

    <h2 style="margin-top: 22px">Все материалы</h2>
    <div class="mats">
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
import {ref} from "vue";

const search = ref('')

const tags = [
  'Lorem',
  'ipsum ',
  'dolor ',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'Lorem',
  'ipsum ',
  'dolor ',
  'consectetur',
  'adipiscing',
  'elit',
]

const categories = [
  {
    img: '',
    title: 'О компании',
    subtitle: '11 материала',
  },
  {
    img: '',
    title: 'Должностные инструкции',
    subtitle: '15 материалов',
  },
  {
    img: '',
    title: 'Офис',
    subtitle: '2 материала',
  },
  {
    img: '',
    title: 'Отпуска и отгулы',
    subtitle: '3 материала',
  },
  {
    img: '',
    title: 'Выплаты и вознаграждения',
    subtitle: '6 материалов',
  },
]
    //место обучения кадров требуют от нас анализа соответствующий условий активизации. Равным образом новая модель организационной
const _mats = [
  {title: 'Место обучения', tags: ['Офис', 'Инструкция']},
  {title: 'Кадров требуют от нас анализа соответствующий условий активизации', tags: ['Отпуск']},
  {title: 'Равным образом новая модель организационной', tags: ['Компания', 'Структура', 'Важно']},
  {title: 'С другой стороны', tags: ['Офис', 'Инструкция', 'Компания', 'Структура']},
  {title: 'Количественный', tags: ['Инструкция']},
  {title: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности способствует подготовки и реализации новых предложений', tags: ['Руководство', 'Офис', 'Инструкция']},
]

const mats = [..._mats, ..._mats, ..._mats,];

const showHr = ref(false);
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileLibrary {
  display: flex;
  flex-direction: column;

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .inputSearch {
    background-color: $color-grey;
    outline: none;
    border-radius: $borra;
    border: 0px solid #b0b0b0;
    padding: 10px 8px;
    flex: 1;
  }


  .tags {
  }


  .btnShowHr {
    margin-top: 12px;
  }

  .hr {
    margin-top: 6px;
    background-color: white;
    padding: 12px;
    border-radius: $borra;
    border: 1px solid $color-grey;
    font-size: 14px;
  }


  .categories {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .category {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      .img {
        height: 40px;
        width: 60px;
        background-color: $color-grey;
        border-radius: $borra;
        border: none;
        outline: none;
      }

      .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;

        .title {
          font-weight: 600;
        }

        .subtitle {
          font-size: 13px;
        }
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
