export const state = () => ({
  status: [
    { id: 1, status: 'Not Started' },
    { id: 2, status: 'In Progress' },
    { id: 3, status: 'Completed' },
  ],
  tasks: [
    {
      statusId: 1,
      id: 10,
      title: 'Learn Vue',
      description: 'Learn VUE from the website',
    },
    {
      statusId: 1,
      id: 11,
      title: 'Learn Nuxt',
      description: 'Learn Nuxt from the website',
    },
    {
      statusId: 2,
      id: 13,
      title: 'Be Stuck',
      description: '',
    },
    {
      statusId: 3,
      id: 14,
      title: 'First Task',
      description: 'Yay!',
    },
    {
      statusId: 3,
      id: 15,
      title: 'Procrastinate',
      description: 'Damn!',
    },
    {
      statusId: 1,
      id: 16,
      title: 'Do something',
      description: 'hells Nah!',
    },
  ],
})

export const mutations = {
  set(state, { tasks, statusId }) {
    state.tasks = state.tasks.filter((task) => task.statusId !== statusId)
    const newTask = tasks.map((task) => {
      return {
        ...task,
        statusId,
      }
    })
    state.tasks = state.tasks.concat(newTask)
  },
}

export const getters = {
  getTaskDetailById: (state) => (id) => {
    const task = state.tasks.find((task) => parseInt(task.id) === parseInt(id))

    return {
      task,
    }
  },

  getTasksByStatusId: (state) => (id) => {
    return state.tasks.filter(
      (task) => parseInt(task.statusId) === parseInt(id)
    )
  },
}

export const actions = {
  set({ commit }, payload) {
    commit('set', payload)
  },
}
