<template>
  <div class="_dp" id="pageDesktopNewRoadmap">
    <h1>Новый роадмап обучения</h1>

    <h2 style="margin-top: 10px !important;">Придумайте имя курса обучения:</h2>
    <input class="appInput" type="text" placeholder="Название роадмапа"/>

    <h2>Роадмап будет содержать такие задания:</h2>
    <i v-if="selectedLessons.length === 0">(пусто)</i>

    <div class="lesson" v-for="(lesson, i) in selectedLessons">
      №{{i + 1}}: {{lesson.title}}
    </div>

    <h2>Добавьте ещё задание, с помощью этой формы</h2>
    <div class="newLessons">
      <div class="newLesson" v-for="newLesson in newLessons">
        {{newLesson.title}}
        <button class="appButton lime btnAddLesson" @click="addLesson">Добавить задание</button>
      </div>
    </div>

    <h2>Когда закончите добавлять задания, сохраните роадмап</h2>
    <button class="appButton primary btnSave" @click="save">Сохранить роадмап</button>
  </div>
</template>


<script setup>
import {ref} from "vue";

const selectedLessons = ref([]);

const newLessons = ref([]);

const addLesson = (lesson) => {
  selectedLessons.value.push(lesson)
}

const save = () => {

}
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageDesktopNewRoadmap {
  input {
    width: 800px;
  }

  h2 {
    margin-top: 32px !important;
  }

  .btnSave {
  }
}
</style>
