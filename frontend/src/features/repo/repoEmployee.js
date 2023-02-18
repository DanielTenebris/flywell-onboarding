import {faker} from "@faker-js/faker";

const data = []
const size = getRandomInt(20);
for (let i = 0; i < size + 10; i++) {
  data.push({
    email: faker.internet.email(),
    roadmap: null,
    mentorContacts: '',
    name: faker.name.fullName(),
    position: faker.name.jobTitle(),
  })
}


export const repoEmployee = () => {
  return {
    getAll: async () => {
      return data
    }
  }
}
