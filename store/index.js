import { v4 as uuidv4 } from 'uuid'

/**
 * Initial State.
 *
 * status: Contains information about the various columns. {Object: id, status}
 * tasks: Conatins information about tasks. (Object: {id, statusId, title, description})
 * @returns void
 */
export const state = () => ({
  status: [
    { id: '1', status: 'Not Started' },
    { id: '2', status: 'In Progress' },
    { id: '3', status: 'Completed' },
  ],
  tasks: [],
})

/**
 * Holds mutations
 */
export const mutations = {
  // Run once when the application starts. Loads initial state and stores ot in localstorage
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

  // Adds a new task to localstorage,
  addTask(state, payload) {
    let tasks = []
    if (process.browser) {
      tasks = JSON.parse(localStorage.getItem('tasks')) || []
      tasks.push(payload)

      localStorage.setItem('tasks', JSON.stringify(tasks))
      state.tasks = tasks
    }
  },

  // Move task from one status to another
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

  // Handle Task details changes.
  // The process followed is: Remove the old task, add the new task
  editTask(state, { newTask, oldTask }) {
    state.tasks = state.tasks.filter((task) => task.id !== oldTask.id)
    state.tasks = state.tasks.concat(newTask)
    if (process.browser) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },

  // Handle deletion of task
  deleteTask(state, { oldTask }) {
    state.tasks = state.tasks.filter((task) => task.id !== oldTask.id)
    if (process.browser) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },

  // Handle addition of a new status
  addStatus(state, payload) {
    state.status = state.status.concat(payload)
    if (process.browser) {
      localStorage.setItem('status', JSON.stringify(state.status))
    }
  },
}

/**
 * Holds code for GET functions
 */
export const getters = {
  // Get task detial by id passed in the URL
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

  // Get all tasks under a status
  getTasksByStatusId: (state) => (id) => {
    return state.tasks.filter((task) => task.statusId === id)
  },

  // Get all status from the database (localstorage)
  getAllStatus: (state) => {
    return state.status
  },
}

/**
 * Holds code for Actions
 */
export const actions = {
  // Fetch data mutation
  fetchData({ commit }) {
    commit('fetchData')
  },

  // Add task mutation. UUID generated for task
  addTask({ commit }, { newData, statusId }) {
    const id = uuidv4()
    const payload = { id, statusId, ...newData }
    commit('addTask', payload)
  },

  // Set Tasks mutation
  setTasks({ commit }, payload) {
    commit('setTasks', payload)
  },

  // Edit Task mutation
  editTask({ commit }, payload) {
    commit('editTask', payload)
  },

  // Delete Task mutation
  deleteTask({ commit }, payload) {
    commit('deleteTask', payload)
  },

  // Add Status mutation. UUID generated for the new status
  addStatus({ commit }, status) {
    const id = uuidv4()
    const payload = { id, status }
    commit('addStatus', payload)
  },
}
