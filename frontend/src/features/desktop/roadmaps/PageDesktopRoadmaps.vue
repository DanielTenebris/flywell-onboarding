<template>
  <div class="_dp" id="pageMobileRoadmaps">
    <h1>
      Роадмап обучения
    </h1>

    <button class="appButton primary btnNew" @click="$router.push('/roadmaps/new')">Создать новый</button>

    <div class="roadmaps">
      <RoadmapInline v-for="r in roadmaps" :roadmap="r" class="roadmap" />
    </div>
  </div>
</template>


<script setup>
import RoadmapInline from "@/features/desktop/roadmaps/RoadmapInline.vue";
import {repoRoadmap} from "@/features/repo/repoRoadmap.js";

const roadmaps = repoRoadmap().getAll();
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageMobileRoadmaps {
  .btnNew {
    margin-bottom: 24px;
  }

  .roadmaps {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
