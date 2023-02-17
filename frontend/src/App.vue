<template>
  <component :is="layout"></component>
</template>


<script setup>
import LayoutMain from "@/layouts/LayoutMain.vue";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import LayoutMobile from "@/layouts/mobile/LayoutMobile.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta?.layout ?? LayoutMobile
})

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  background-color: #f9faff;
}

* {
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3 {
  margin: 0px;
}

router-link,
a {
  text-decoration: none;
  color: inherit;

  &:hover,
  &:active,
  &:selected
  {
    text-decoration: underline;
  }
}
</style>
