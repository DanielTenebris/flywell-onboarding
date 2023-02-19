<template>
  <div id="roadmapInline">
    <div class="title">{{props.lessons.title}}</div>
    <div class="bottom">
      <div>{{props.lessons.material}}</div>
      <div>{{props.lessons.test}} </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(['lessons']);
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
}
</style>