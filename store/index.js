import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  status: [
    { id: '1', status: 'Not Started' },
    { id: '2', status: 'In Progress' },
    { id: '3', status: 'Completed' },
  ],
  tasks: [],
})

export const mutations = {
  fetchData(state) {
    let tasks = []
    let status = []

    if (process.browser) {
      tasks = JSON.parse(localStorage.getItem('tasks')) || state.tasks
      status = JSON.parse(localStorage.getItem('status')) || state.status

      state.tasks = tasks
      state.status = status

      localStorage.setItem('tasks', JSON.stringify(tasks))
      localStorage.setItem('status', JSON.stringify(status))
    }
  },
  addTask(state, payload) {
    let tasks = []
    if (process.browser) {
      tasks = JSON.parse(localStorage.getItem('tasks')) || []
      window.console.log(tasks)
      tasks.push(payload)
      window.console.log('B', tasks)

      localStorage.setItem('tasks', JSON.stringify(tasks))
      state.tasks = tasks
    }
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
    if (process.browser) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  editTask(state, { newTask, oldTask }) {
    state.tasks = state.tasks.filter((task) => task.id !== oldTask.id)
    state.tasks = state.tasks.concat(newTask)
    if (process.browser) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  deleteTask(state, { oldTask }) {
    state.tasks = state.tasks.filter((task) => task.id !== oldTask.id)
    if (process.browser) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  addStatus(state, payload) {
    state.status = state.status.concat(payload)
    window.console.log(state.status)
    if (process.browser) {
      localStorage.setItem('status', JSON.stringify(state.status))
    }
  },
}

export const getters = {
  getTaskDetailById: (state) => (id) => {
    const task = state.tasks.find((task) => task.id === id)
    let status = null
    if (task) {
      status = state.status.find((s) => s.id === task.statusId)
    }
    return {
      task,
      status,
    }
  },

  getTasksByStatusId: (state) => (id) => {
    return state.tasks.filter((task) => task.statusId === id)
  },

  getAllStatus: (state) => {
    return state.status
  },
}

export const actions = {
  fetchData({ commit }) {
    commit('fetchData')
  },
  addTask({ commit }, { newData, statusId }) {
    const id = uuidv4()
    const payload = { id, statusId, ...newData }
    commit('addTask', payload)
  },
  setTasks({ commit }, payload) {
    commit('setTasks', payload)
  },
  editTask({ commit }, payload) {
    commit('editTask', payload)
  },
  deleteTask({ commit }, payload) {
    commit('deleteTask', payload)
  },
  addStatus({ commit }, status) {
    const id = uuidv4()
    const payload = { id, status }
    commit('addStatus', payload)
  },
}
