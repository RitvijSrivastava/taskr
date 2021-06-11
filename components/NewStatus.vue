<template>
  <b-col lg="2" md="2" class="text-secondary">
    <h6
      v-show="!showInput"
      class="p-3 add-new-status"
      @click="toggleInput(true)"
    >
      + Add new status
    </h6>
    <b-form
      v-show="showInput"
      class="status-form"
      @submit.prevent="submit"
      @reset.prevent="reset"
    >
      <b-form-input
        v-model="status"
        placeholder="Enter status"
        :state="statusValidation"
        required=""
      ></b-form-input>
      <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters
      </b-form-invalid-feedback>
      <b-row>
        <b-col>
          <b-button type="reset" class="reset float-right ml-3" size="sm"
            >Cancel</b-button
          >
          <b-button
            type="submit"
            class="submit float-right ml-3"
            variant="success"
            size="sm"
          >
            Save
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      status: '',
      showInput: false,
    }
  },
  computed: {
    statusValidation() {
      return this.status.length > 2
    },
  },
  methods: {
    toggleInput(val) {
      this.showInput = val
    },
    reset() {
      this.status = ''
      this.toggleInput(false)
    },
    submit() {
      if (this.status.length > 2) {
        this.$store.dispatch('addStatus', this.status)
        this.toggleInput(false)
      }
    },
  },
}
</script>

<style scoped>
.add-new-status {
  cursor: pointer;
  border: 1px solid lightgrey;
}
.add-new-status:hover {
  color: black;
  border: 2px solid black;
}

.submit,
.reset {
  float: right;
}
</style>
