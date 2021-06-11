<template>
  <b-row class="d-flex scroll-layout">
    <StatusColumn v-for="stat in getStatus" :key="stat.id" :status="stat" />
  </b-row>
</template>

<script>
export default {
  computed: {
    getStatus() {
      return this.$store.getters.getAllStatus
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
</style>
