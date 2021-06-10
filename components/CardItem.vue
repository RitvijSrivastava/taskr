<template>
  <div>
    <b-card>
      <b-card-text>
        {{ data.title }}
      </b-card-text>
    </b-card>
  </div>
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
