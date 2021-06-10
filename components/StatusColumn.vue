<template>
  <b-col lg="4">
    <span class="d-flex align-items-center">
      <h5 class="status-heading">{{ data.status }}</h5>
      <b-badge pill variant="secondary" class="mx-2">
        {{ data.tasks.length }}
      </b-badge>
      <h3 class="ml-auto text-secondary add-new-button">+</h3>
    </span>
    <CardItem
      v-for="card in data.tasks"
      :key="card.id"
      :data="card"
      class="my-3"
    />
    <nuxt-link to="/" class="link text-secondary"> + New </nuxt-link>
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

<style scoped>
.status-heading {
  font-weight: 600;
}

.link:hover {
  text-decoration: none;
}

.add-new-button {
  cursor: pointer;
}
</style>
