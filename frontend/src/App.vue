<template>
  <LayoutMain />
</template>


<script setup>
import LayoutMain from "@/layouts/LayoutMain.vue";
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Open Sans', sans-serif;
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

  &:hover {
    text-decoration: underline;
  }
}
</style>
