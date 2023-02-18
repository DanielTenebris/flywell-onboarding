<template>
  <div id="roadmapInline">
    <div class="title">Инженер 1 разряда</div>
    <div class="bottom">
      <div>12 заданий</div>
      <div>•</div>
      <div>3 чел проходят сейчас</div>
      <div>•</div>
      <div>73 чел прошли раньше</div>
    </div>
  </div>
</template>


<script setup>
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
