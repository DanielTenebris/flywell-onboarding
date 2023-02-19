<template>
  <div id="materialInline">
    <div class="title">{{ props.material.title }}</div>
    <div class="bottom">
      <div class="link"><a href="{{ props.material.contentLink }}"> ссылка на материал</a></div>
      <div class="tags">
      <div class="tag" v-for="tag in  props.material.tags">
        {{tag}}
      </div>
      </div>

    </div>
  </div>
</template>


<script setup>
const props = defineProps(['material']);
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#materialInline {
  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .bottom {

    gap: 8px;
    opacity: 0.8;
    .link{
      color: $color-purple;
      margin-right: 20px;
    //  border-bottom: 1px solid $color-purple;
    }
    .tags{
      display: flex;
      flex-direction: row;
      .tag{
        padding: 3px;
        margin: 0 5px 0 0;
        background-color: $color-lime;
        border-radius: 5px;
      }
    }
  }
}
</style>
