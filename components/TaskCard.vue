<template>
  <div>
    <NuxtLink :to="`/task/${task.id}`" class="link-no-decorate">
      <b-card class="shadow">
        <b-card-text>
          {{ task.title }}
        </b-card-text>
      </b-card>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.link-no-decorate {
  color: black;
  text-decoration: none;
}
</style>
