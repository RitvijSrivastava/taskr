<template>
  <b-col lg="3" md="3">
    <span class="d-flex align-items-center">
      <h5 class="status-heading">{{ status.status }}</h5>
      <b-badge pill variant="secondary" class="mx-2">
        {{ tasks.length }}
      </b-badge>
      <NuxtLink
        :to="`/create-new-task?id=${status.id}`"
        class="link-no-decorate ml-auto add-new-button"
      >
        <h3 class="text-secondary">+</h3>
      </NuxtLink>
    </span>
    <draggable v-model="tasks" v-bind="draggableOptions">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        class="my-3 draggable-item"
      />
    </draggable>
    <NuxtLink
      :to="`/create-new-task?id=${status.id}`"
      class="link-no-decorate text-secondary"
    >
      + New
    </NuxtLink>
  </b-col>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.getTasksByStatusId(this.status.id)
      },
      set(newTasks) {
        const payload = {
          tasks: newTasks,
          statusId: this.status.id,
        }
        this.$store.dispatch('setTasks', payload)
      },
    },
    draggableOptions() {
      return {
        group: {
          name: 'tasks',
        },
        draggable: '.draggable-item',
        ghostClass: 'ghost',
      }
    },
  },
}
</script>

<style scoped>
.status-heading {
  font-weight: 600;
}

.link-no-decorate:hover {
  text-decoration: none;
}

.add-new-button {
  cursor: pointer;
}

.draggable-item {
  cursor: pointer;
}
.ghost {
  opacity: 0.4;
}
</style>
