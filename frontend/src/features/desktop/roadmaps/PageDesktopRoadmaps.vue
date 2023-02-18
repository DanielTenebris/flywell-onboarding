<template>
  <div class="_dp" id="pageMobileRoadmaps">
    <h1>
      Роадмап обучения
    </h1>

    <button class="appButton primary btnNew" @click="$router.push('/roadmaps/new')">Создать новый</button>

    <div class="roadmaps">
      <RoadmapInline v-for="i in 5" class="roadmap" />
    </div>
  </div>
</template>


<script setup>
import RoadmapInline from "@/features/desktop/roadmaps/RoadmapInline.vue";
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
