<template>
  <div class="_dp" id="pageMobileRoadmaps">
    <h1>
      Важные материалы
    </h1>

    <button class="appButton primary btnNew" @click="$router.push('/materials/new')">Добавить новый материал</button>

    <div class="roadmaps">
      <MaterialInline v-for="r in materials" :material="r" class="roadmap" />
    </div>
  </div>
</template>


<script setup>
import MaterialInline from "@/features/desktop/materials/MaterialInline.vue";
import {repoMaterial} from "@/features/repo/repoMaterial.js";

const materials = repoMaterial().getAll();
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