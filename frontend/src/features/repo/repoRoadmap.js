import {repoLesson} from "@/features/repo/repoLesson.js";
import {getRandomInt, shuffle} from "@/features/repo/utils.js";
import {faker} from "@faker-js/faker";

const data = [];

const lessons = repoLesson().getAll();


for (let i = 0; i < 10 + getRandomInt(20); i++) {
  data.push({
    title: faker.lorem.sentence(),
    lessons: lessons.slice(0, getRandomInt(8)),
  });
  shuffle(lessons);
}

export const repoRoadmap = () => {
  return {
    getAll: () => {
      return data;
    },

    save: (obj) => {
      data.push(obj);
    }
  }
}
