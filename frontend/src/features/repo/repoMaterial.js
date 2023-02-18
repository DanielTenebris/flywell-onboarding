import {faker} from "@faker-js/faker";

const data = []
const size = getRandomInt(20);
for (let i = 0; i < size + 10; i++) {
  data.push({
    fileS3: '',
    contentLink: null,
    title: faker.system.fileName(),
    tags: faker.random.words().split(' '),
  })
}


export const repoMaterial = () => {
  return {
    getAll: async () => {
      return data;
    }
  }
}