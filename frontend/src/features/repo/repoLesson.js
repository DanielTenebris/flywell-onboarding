const repoLesson = () => {
  return {
    getAll: async () => {
      return [
        {
          title: 'Урок первый',
          materials: repoMaterial().getAll(),
          tests: repoTest().getAll(),
        }
      ]
    }
  }
}
