import {getRandomInt} from "@/features/repo/utils.js";
import {faker} from "@faker-js/faker";

const data = []
for (let i = 0; i < 10 + getRandomInt(20); i++) {
  data.push({
    questions: [
      {
        question: faker.lorem.words(4) + '?',
        options: ['42', ...faker.lorem.words().split(' ')],
        correctI: 0,
      },
    ]
  });
}

export const repoTest = () => {
  return {
    getAll: () => {
      return data
    },

    save: (obj) => {
      data.push(obj);
    }
  }
}
