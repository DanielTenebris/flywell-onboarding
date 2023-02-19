import {faker} from "@faker-js/faker";
import {getRandomInt} from "@/features/repo/utils.js";

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
data.push({
  email: 'masha@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Петрова Мария Сергеевна",
  position: "UI/UX designer",
})
data.push({
  email: 'vasya@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Сергеев Василий Петрович",
  position: "руководитель отдела",
})
data.push({
  email: 'petya@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Петрушкин Петр Васильевич",
  position: "frontend junior developer",
})
data.push({
  email: 'sergei@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Варламов Сергей Петрович",
  position: "бухгалтер"
})
data.push({
  email: 'nastya@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Бошкова Анастасия Сергеевна",
  position: "руководительница отдела",
})
data.push({
  email: 'ekaterina@mail.ru',
  roadmap: null,
  mentorContacts: '',
  name: "Васильченко Екатерина Петровна",
  position: "руководительница отдела",
})
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
