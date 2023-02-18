const repoRoadmap = () => {
  return {
    getAll: async () => {
      return [
        {
          title: 'Первый роадмап',
          lessons: repoLesson().getAll(),
        }
      ]
    }
  }
}
