<template>
  <div class="pl-3 pr-3">
    <!-- <b-container class="status-container" fluid> -->
    <vue-horizontal responsive scroll :button="false" class="horizontal">
      <StatusColumn v-for="stat in getStatus" :key="stat.id" :status="stat" />
      <NewStatus />
    </vue-horizontal>
    <!-- </b-container> -->
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
export default {
  components: { VueHorizontal },
  computed: {
    getStatus() {
      return this.$store.getters.getAllStatus
    },
  },
}
</script>

<style scoped>
.horizontal {
  height: 80vh;
}
</style>
