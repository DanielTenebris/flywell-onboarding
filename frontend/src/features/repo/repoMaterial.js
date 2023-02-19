import {faker} from "@faker-js/faker";
import {getRandomInt} from "@/features/repo/utils.js";

const data = []
const size = getRandomInt(20);
// for (let i = 0; i < size + 10; i++) {
//   data.push({
//     fileS3: '',
//     contentLink: null,
//     title: faker.system.fileName(),
//     tags: faker.random.words().split(' '),
//   })
// }

data.push({
  fileS3: '#',
  contentLink: null,
  title: "О нашей компании",
  tags: ['приветственное', 'компания'],
});
data.push({
  fileS3: '#',
  contentLink: null,
  title:'Корпоративы',
  tags: [ 'компания'],
});
data.push({
  fileS3: '#',
  contentLink: null,
  title: 'Инструкция по работе с ООО ВПГ',
  tags: ['инструкция', 'ООО ВПГ'],
});

data.push({
  fileS3: '#',
  contentLink: null,
  title: 'Условия оплаты труда',
  tags: ['инструкция', 'оплата', 'вознаграждения'],
});
data.push({
  fileS3: '#',
  contentLink: null,
  title: 'Инструкция по работе с молодежью',
  tags: ['инструкция', 'компания',"работа с населением"],
});

data.push({
  fileS3: '#',
  contentLink: null,
  title: 'Оплата сверхурочных',
  tags: ['компания', 'оплата', 'вознаграждения','надбавки'],
});

export const repoMaterial = () => {
  return {
    getAll: () => {
      return data;
    },

    save: (obj) => {
      data.push(obj);
    }
  }
}
