import {repoLesson} from "@/features/repo/repoLesson.js";
import {getRandomInt, shuffle} from "@/features/repo/utils.js";

const data = [];

const lessons = repoLesson().getAll();


for (let i = 0; i < 10 + getRandomInt(20); i++) {
  data.push({
    title: 'Первый роадмап',
    lessons: lessons.slice(0, 5),
  });
  shuffle(lessons);
}

export const repoRoadmap = () => {
  return {
    getAll: () => {
      return data;
    }
  }
}
