<template>
  <div class="center-items">
    <!-- <b-container> -->
    <b-row class="mb-3">
      <b-col>
        <h1>{{ task.title }}</h1>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col lg="2" sm="2" md="2">
        <h5 class="sub-heading">Status:</h5>
      </b-col>
      <b-col>
        <h6 class="mt-1 sub-content">{{ task.status }}</h6>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col lg="2" sm="2" md="2">
        <h5 class="sub-heading">Description:</h5>
      </b-col>
      <b-col>
        <h6 class="mt-1 sub-content">{{ task.description }}</h6>
      </b-col>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {},
    }
  },
  computed: {
    getTasks() {
      return this.$store.getters.getTaskDetailById(this.$route.params.id).task
    },
  },
  created() {
    this.task = this.getTasks
  },
}
</script>

<style scoped>
.center-items {
  overflow-y: scroll;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sub-content {
  margin-left: 50px;
}

.sub-heading {
  font-weight: 600;
  margin-right: 10%;
}
</style>
