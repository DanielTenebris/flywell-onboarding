<template>
  <div class="_dp" id="pageDesktopNewLesson">
    <h1>Новое задание (урок)</h1>

    <h2 style="margin-top: 10px !important;">Придумайте имя задания:</h2>
    <input v-model="title" class="appInput" type="text" placeholder="Название роадмапа"/>


    <h2>В этом уроке будут такие материалы для изучения</h2>
    <i v-if="selectedMats.length === 0">(пусто)</i>
    <div class="lessons">
      <div class="lesson" v-for="(mat, i) in selectedMats">
        <span>№{{i + 1}}: {{mat.title}}</span>
        <button class="appButton orange smallButton" @click="removeMat(i)">Убрать</button>
      </div>
    </div>

    <h2>В этом уроке будут такие тесты для проверки знаний</h2>
    <i v-if="selectedTests.length === 0">(пусто)</i>
    <div class="lessons">
      <div class="lesson" v-for="(test, i) in selectedTests">
        <span>№{{i + 1}}: {{test.title}}</span>
        <button class="appButton orange smallButton" @click="removeTest(i)">Убрать</button>
      </div>
    </div>


    <h2>Добавьте материалы в этот урок, с помощью этой формы</h2>
    <div class="lessons">
      <div class="lesson" v-for="newMat in newMats">
        <button class="appButton lime btnAddLesson smallButton" @click="addMat(newMat)">Добавить</button>
        {{newMat.title}}
      </div>
    </div>


    <h2>Добавьте тесты в этот урок, с помощью этой формы</h2>
    <div class="lessons">
      <div class="lesson" v-for="newTest in newTests">
        <button class="appButton lime btnAddLesson smallButton" @click="addTest(newTest)">Добавить</button>
        {{newTest.title}}
      </div>
    </div>


    <h2>Когда закончите добавлять материалы и тесты, сохраните задание</h2>
    <button class="appButton primary btnSave" @click="save">Сохранить задание</button>
  </div>
</template>


<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {repoRoadmap} from "@/features/repo/repoRoadmap.js";
import {repoLesson} from "@/features/repo/repoLesson.js";
import {repoMaterial} from "@/features/repo/repoMaterial.js";
import {repoTest} from "@/features/repo/repoTest.js";

const title = ref('');

const selectedMats = ref([]);
const selectedTests = ref([]);

const newMats = ref(repoMaterial().getAll());
const newTests = ref(repoTest().getAll());

const addMat = (mat) => selectedMats.value.push(mat)
const addTest = (test) => selectedTests.value.push(test)
const removeMat = (i) => selectedMats.value = selectedMats.value.filter((v, index, a) => {
  return index !== i
})
const removeTest = (i) => selectedTests.value = selectedTests.value.filter((v, index, a) => {
  return index !== i
})


const router = useRouter();
const save = () => {
  repoLesson().save({
    title: title,
    materials: selectedMats.value,
    tests: selectedTests.value,
  })
  router.push('/lessons');
}
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#pageDesktopNewLesson {
  input {
    width: 800px;
  }

  h2 {
    margin-top: 32px !important;
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
