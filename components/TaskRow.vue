<template>
  <b-row class="d-flex scroll-layout">
    <StatusColumn v-for="data in fakeData" :key="data.id" :data="data" />
  </b-row>
</template>

<script>
import { fakeData } from '@/assets/data.js'
export default {
  data() {
    return {
      fakeData,
    }
  },
}
</script>

<style scoped></style>
