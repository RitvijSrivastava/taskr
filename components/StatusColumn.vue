<template>
  <b-col lg="4">
    <h5>{{ data && data.status }}</h5>
  </b-col>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped></style>
