import {repoTest} from "@/features/repo/repoTest.js";
import {repoMaterial} from "@/features/repo/repoMaterial.js";

const data = []
let materials = repoMaterial().getAll();
let tests = repoTest.getAll();

for (let i = 0; i < 10 + getRandomInt(20); i++) {
  data.push({
    title: 'Урок первый',
    materials: materials.slice(0, 4),
    tests: tests.slice(0, 1),
  });
  shuffle(materials);
  shuffle(tests);
}


export const repoLesson = () => {
  return {
    getAll: async () => {
      return data;
    }
  }
}
