export const cols = {
  name: {
    title: 'Имя',
    sort: true,
  },
  age: {
    title: 'Возраст',
    sort: true,
  },
  qualities: {
    title: 'Качества',
  },
  profession: {
    title: 'Профессия',
    component: item => item.profession.name,
    sort: item => item.profession.name,
  },
  delete: {
    title: 'Удалить',
  },
}
