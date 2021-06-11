<template>
  <b-container class="my-5">
    <Heading />
    <StatusRow />
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchData')
  },
}
</script>

<style></style>
