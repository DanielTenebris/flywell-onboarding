const repoTest = () => {
  return {
    getAll: async () => {
      return [
        {
          questions: [
            {
              question: 'Сколько?',
              options: ['Много', 'Мало', '42',],
              correctI: 2,
            },
            {
              question: 'А зачем?',
              options: ['А затем', 'А кто спрашивает?', '42',],
              correctI: 2,
            },
          ]
        }
      ]
    }
  }
}
