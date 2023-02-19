import {repoTest} from "@/features/repo/repoTest.js";
import {repoMaterial} from "@/features/repo/repoMaterial.js";
import {getRandomInt, shuffle} from "@/features/repo/utils.js";
import {faker} from "@faker-js/faker";

const data = []
let materials = repoMaterial().getAll();
let tests = repoTest().getAll();
//
// for (let i = 0; i < 10 + getRandomInt(20); i++) {
//   data.push({
//     title: faker.lorem.sentence(),
//     materials: materials.slice(0, getRandomInt(5)),
//     tests: tests.slice(0, getRandomInt(1)),
//   });
//   shuffle(materials);
//   shuffle(tests);
// }
data.push({
  title: "Знакомство с компанией",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
data.push({
  title: "Основы HTML",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
data.push({
  title: "Основы CSS",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
data.push({
  title: "Основы JavaScript",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
data.push({
  title: "Всё о зарплате и бонусах",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
shuffle(materials);
shuffle(tests);

data.push({
  title: "История дизайна",
  materials: materials.slice(0, getRandomInt(5)),
  tests: tests.slice(0, getRandomInt(1)),
});
export const repoLesson = () => {
  return {
    getAll: () => {
      return data;
    },

    save: (obj) => {
      data.push(obj);
    }
  }
}
