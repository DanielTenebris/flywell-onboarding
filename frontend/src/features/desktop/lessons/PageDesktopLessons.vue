<template>
  <div class="_dp" id="pageMobileRoadmaps">
    <h1>
      Виджет заданий обучающимся
    </h1>

    <button class="appButton primary btnNew" @click="$router.push('/roadmaps/new')">Создать новое задание</button>

    <div class="roadmaps">
      <LessonsInline v-for="r in roadmaps" :lessons="r" class="roadmap" />
    </div>
  </div>
</template>


<script setup>
import LessonsInline from "@/features/desktop/lessons/LessonsInline";
import {repoLesson} from "@/features/repo/repoLesson.js";

const roadmaps = repoLesson().getAll();
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileRoadmaps {
  .btnNew {
    margin-bottom: 24px;
  }

  .roadmaps {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 18px;
  }
}
</style>

