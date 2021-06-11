// Root route. Holds code for the home/landing page.
<template>
  <div class="my-5 root-container" fluid>
    <Heading />
    <StatusRow />
  </div>
</template>

<script>
export default {
  // Fetch and set tasks and status in local storage upon mounting
  mounted() {
    this.$store.dispatch('fetchData')
  },
}
</script>

<style></style>
