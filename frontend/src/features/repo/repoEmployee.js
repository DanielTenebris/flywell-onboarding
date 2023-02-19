import {faker} from "@faker-js/faker";
import {getRandomInt, shuffle} from "@/features/repo/utils.js";
import {repoRoadmap} from "@/features/repo/repoRoadmap.js";

const data = []
const size = getRandomInt(20);
// for (let i = 0; i < size + 10; i++) {
//   data.push({
//     email: faker.internet.email(),
//     roadmap: null,
//     mentorContacts: '',
//     name: faker.name.fullName(),
//     position: faker.name.jobTitle(),
//   })
// }
const roadmaps = repoRoadmap().getAll();
data.push({
  email: 'masha@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Петрова Мария Сергеевна",
  position: "UI/UX designer",
})
shuffle(roadmaps);
data.push({
  email: 'vasya@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Сергеев Василий Петрович",
  position: "руководитель отдела",
})
shuffle(roadmaps);
data.push({
  email: 'petya@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Петрушкин Петр Васильевич",
  position: "frontend junior developer",
})
shuffle(roadmaps);
data.push({
  email: 'sergei@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Варламов Сергей Петрович",
  position: "бухгалтер"
})
shuffle(roadmaps);
data.push({
  email: 'nastya@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Бошкова Анастасия Сергеевна",
  position: "руководительница отдела",
})
shuffle(roadmaps);
data.push({
  email: 'ekaterina@mail.ru',
  roadmap: roadmaps[0],
  mentorContacts: '',
  name: "Васильченко Екатерина Петровна",
  position: "руководительница отдела",
})
shuffle(roadmaps);
export const repoEmployee = () => {
  return {
    getAll: () => {
      return data
    },

    save: (obj) => {
      data.push(obj);
    }
  }
}
