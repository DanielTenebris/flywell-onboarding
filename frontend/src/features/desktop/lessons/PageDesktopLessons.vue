<template>
  <div class="_dp" id="pageDesktopLessons">
    <h1>
      Задания (уроки)
    </h1>

    <button class="appButton primary btnNew" @click="$router.push('/lessons/new')">Создать новое</button>

    <div class="elements">
      <LessonInline v-for="le in lessons" :lesson="le" class="element" />
    </div>
  </div>
</template>


<script setup>
import LessonInline from "@/features/desktop/lessons/LessonInline.vue";
import {repoLesson} from "@/features/repo/repoLesson.js";

const lessons = repoLesson().getAll();
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageDesktopLessons {
  .btnNew {
    margin-bottom: 24px;
  }

  .elements {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
