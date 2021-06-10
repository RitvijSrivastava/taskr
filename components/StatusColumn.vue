<template>
  <b-col lg="4">
    <span class="d-flex align-items-center">
      <h5 class="status-heading">{{ status.status }}</h5>
      <b-badge pill variant="secondary" class="mx-2">
        {{ getTasks.numberOfTasks }}
      </b-badge>
      <NuxtLink
        to="/create-new-task"
        class="link-no-decorate ml-auto add-new-button"
      >
        <h3 class="text-secondary">+</h3>
      </NuxtLink>
    </span>
    <TaskCard
      v-for="task in getTasks.tasks"
      :key="task.id"
      :task="task"
      class="my-3"
    />
    <NuxtLink to="/create-new-task" class="link-no-decorate text-secondary">
      + New
    </NuxtLink>
  </b-col>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    status: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getTasks() {
      const data = this.$store.getters.getTasksByStatusId(this.status.id)
      return data
    },
  },
  methods: {
    ...mapMutations(['changeTaskStatus']),
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
</style>
