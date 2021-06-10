export const state = () => ({
  status: [
    { id: 1, status: 'Not Started' },
    { id: 2, status: 'In Progress' },
    { id: 3, status: 'Completed' },
  ],
  tasks: [
    {
      taskId: 1,
      status: 'Not Started',
      id: 10,
      title: 'Learn Vue',
      description: 'Learn VUE from the website',
    },
    {
      taskId: 1,
      status: 'Not Started',
      id: 11,
      title: 'Learn Nuxt',
      description: 'Learn Nuxt from the website',
    },
    {
      taskId: 2,
      status: 'In Progress',
      id: 13,
      title: 'Be Stuck',
      description: '',
    },
    {
      taskId: 3,
      status: 'Completed',
      id: 14,
      title: 'First Task',
      description: 'Yay!',
    },
    {
      taskId: 3,
      status: 'Completed',
      id: 15,
      title: 'Procrastinate',
      description: 'Damn!',
    },
    {
      taskId: 1,
      status: 'Nott Started',
      id: 16,
      title: 'Do something',
      description: 'hells Nah!',
    },
  ],
})

export const getters = {
  getTaskDetailById: (state) => (id) => {
    const task = state.tasks.find((task) => parseInt(task.id) === parseInt(id))

    return {
      task,
    }
  },

  getTasksByStatusId: (state) => (id) => {
    const tasks = state.tasks.filter(
      (task) => parseInt(task.taskId) === parseInt(id)
    )
    return {
      numberOfTasks: tasks.length,
      tasks,
    }
  },
}

export const mutations = {
  changeTaskStatus(state, task) {
    window.console.log(task)
  },
}
