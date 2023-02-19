<template>
  <div id="roadmapInline">
    <div class="title">{{props.roadmap.title}}</div>
    <div class="bottom">
      <div class="assign">Назначить на сотрудника</div>
      <div>•</div>
      <div>{{props.roadmap.lessons.length}} заданий</div>
      <div>•</div>
      <div>3 чел проходят сейчас</div>
      <div>•</div>
      <div>73 чел прошли раньше</div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(['roadmap']);
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#roadmapInline {
  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .bottom {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.8;
  }

  .assign {
    color: $color-primary;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
