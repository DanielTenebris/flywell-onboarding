<template>
  <div class="_mp" id="pageMobileLesson">
    <h1>{{lesson.title}}</h1>
    <div class="desc">{{lesson.desc}}</div>
    <div class="est">
      <div class="inner">
        <Icon class="icon" icon="bx:alarm" />
        <div>{{lesson.est}}</div>
      </div>
      <div style="flex: 1"/>
    </div>

    <h2>О чём этот урок?</h2>
    <ul class="about">
      <li v-for="a in lesson.about" :key="a">{{a}}</li>
    </ul>

    <h2>Учебные материалы</h2>
    <div class="mats">
      <div class="mat" v-for="mat in lesson.mats" :key="mat.title">
        <Icon icon="bx:file-blank" class="icon" />
        <div class="text">
          <div class="title">{{mat.title}}</div>
          <div class="tags">
            <div class="appTag localTag" v-for="tag in mat.tags">{{tag}}</div>
          </div>
        </div>
      </div>
    </div>

    <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют определения и уточнения новых предложений. </p>
    <p>Значимость этих проблем настолько очевидна, что новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание существенных финансовых и административных условий. Задача организации, в особенности же реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.</p>

    <div class="actions">
      <div style="flex: 1" />
      <button class="appButton primary">
        <span class="text">Пройти тест</span>
        <Icon class="icon" icon="bx:chevron-right" />
      </button>
    </div>
  </div>
</template>


<script setup>
import {Icon} from "@iconify/vue";

const lesson = {
  title: 'Структура компании',
  desc: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требуют определения и уточнения существенных финансовых и административных условий.',
  est: '13 минут',
  status: 'wip',
  about: [
      'Вы узнаете основную структуру компании, её руководство и организацию',
      'Познакомитесь с ключевыми сотрудниками и по каким вопросам к ним можно обращаться',
  ],
  mats: [
    {title: 'Равным образом новая модель организационной', tags: ['Компания', 'Структура', 'Важно']},
    {title: 'С другой стороны', tags: ['Офис', 'Инструкция', 'Компания', 'Структура']},
  ]
};
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileLesson {
  background-image: url("@/features/mobile/lesson/bg.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 150px;
  min-height: 500px;

  > h1 {
    max-width: 70%;
    margin-bottom: 0 !important;
  }

  >h2 {
    margin-bottom: 5px;
  }

  .desc {
    max-width: 70%;
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

      margin-top: 6px;
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

  ul {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 20px;
    li {
      margin: 0;
      padding: 0 0 4px;
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
      display: flex;
      justify-content: start;

      .icon {
        font-size: 18px;
        padding-right: 4px;
        color: #595959;
      }

      .text {
        flex: 1;
      }

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

  .actions {
    display: flex;

    .text {
      padding-left: 6px;
    }

    .icon {
      font-size: 22px;
      margin-left: 2px;
    }
  }
}
</style>
