<template>
  <div class="_dp" id="pageDesktopNewRoadmap">
    <h1>Новый роадмап обучения</h1>


    <h2 style="margin-top: 10px !important;">Придумайте имя курса обучения:</h2>
    <input class="appInput" type="text" placeholder="Название роадмапа"/>


    <h2>Роадмап будет содержать такие задания:</h2>
    <i v-if="selectedLessons.length === 0">(пусто)</i>
    <div class="lessons">
      <div class="lesson" v-for="(lesson, i) in selectedLessons">
        <span>№{{i + 1}}: {{lesson.title}}</span>
        <button class="appButton orange smallButton" @click="remove(i)">Убрать</button>
      </div>
    </div>


    <h2>Добавьте ещё задание, с помощью этой формы</h2>
    <div class="lessons">
      <div class="lesson" v-for="newLesson in newLessons">
        <button class="appButton lime btnAddLesson smallButton" @click="addLesson(newLesson)">Добавить</button>
        {{newLesson.title}}
      </div>
    </div>

    <h2>Когда закончите добавлять задания, сохраните роадмап</h2>
    <button class="appButton primary btnSave" @click="save">Сохранить роадмап</button>
  </div>
</template>


<script setup>
import {ref} from "vue";
import {repoRoadmap} from "../../../repo/repoRoadmap.js";
import {repoMaterial} from "@/features/repo/repoMaterial.js";
import {repoLesson} from "@/features/repo/repoLesson.js";

const x = repoRoadmap().getAll();

const selectedLessons = ref([]);

const newLessons = ref(repoLesson().getAll());

const addLesson = (lesson) => {
  selectedLessons.value.push(lesson)
}

const remove = (i) => {
  selectedLessons.value = selectedLessons.value.filter(function(value, index, arr){
    return index !== i;
  });
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

  .smallButton {
    height: 22px;
    margin-right: 6px;
    cursor: pointer;
  }

  .lesson {
    display: flex;
    align-items: center;
  }

  .lessons {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .lesson {
      display: flex;
      align-items: center;
    }
  }
}
</style>
