<template>
  <div class="my-5 root-container" fluid>
    <Heading />
    <StatusRow />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchData')
  },
}
</script>

<style></style>
