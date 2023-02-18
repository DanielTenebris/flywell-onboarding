<template>
  <div id="lessonInline">
    <div class="title">{{props.lesson.title}}</div>
    <div class="bottom">
      <div>{{props.lesson.materials.length}} материалов</div>
      <div>•</div>
      <div>{{props.lesson.tests.length}} тестов</div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(['lesson']);
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#lessonInline {
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
}
</style>
