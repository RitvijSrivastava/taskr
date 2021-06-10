import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  status: [
    { id: '1', status: 'Not Started' },
    { id: '2', status: 'In Progress' },
    { id: '3', status: 'Completed' },
  ],
  tasks: [
    {
      statusId: '1',
      id: '10',
      title: 'Learn Vue',
      description: 'Learn VUE from the website',
    },
    {
      statusId: '1',
      id: '11',
      title: 'Learn Nuxt',
      description: 'Learn Nuxt from the website',
    },
    {
      statusId: '2',
      id: '13',
      title: 'Be Stuck',
      description: '',
    },
    {
      statusId: '3',
      id: '14',
      title: 'First Task',
      description: 'Yay!',
    },
    {
      statusId: '3',
      id: '15',
      title: 'Procrastinate',
      description: 'Damn!',
    },
    {
      statusId: '1',
      id: '16',
      title: 'Do something',
      description: 'hells Nah!',
    },
  ],
})

export const mutations = {
  addTask(state, payload) {
    state.tasks.push(payload)
  },
  setTasks(state, { tasks, statusId }) {
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
    return state.tasks.find((task) => task.id === id)
  },

  getTasksByStatusId: (state) => (id) => {
    return state.tasks.filter((task) => task.statusId === id)
  },
}

export const actions = {
  addTask({ commit }, { newData, statusId }) {
    const id = uuidv4()
    const payload = { id, statusId, ...newData }
    commit('addTask', payload)
  },
  setTasks({ commit }, payload) {
    commit('setTasks', payload)
  },
}
