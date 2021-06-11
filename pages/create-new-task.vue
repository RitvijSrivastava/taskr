<template>
  <div>
    <form class="new-task-form" @submit.prevent="submit">
      <fieldset>
        <legend>
          <font-awesome-icon
            class="icon-btn"
            :icon="['fas', 'arrow-left']"
            @click="goBack()"
          />
          Create New Task
        </legend>
        <div>
          <label class="label" for="title">Task Title</label>
          <input
            id="title"
            v-model="title"
            type="text"
            name="title"
            :state="titleValidation"
            required=""
          />
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>
        </div>
        <div>
          <label class="label" for="textarea">Task Description</label>
          <textarea
            id="textarea"
            v-model="description"
            class="description"
            name="textarea"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },
  computed: {
    titleValidation() {
      return this.title.length > 2
    },
  },
  methods: {
    // Handle Submit. Only submit when the Title is atleast 3 chars long
    submit() {
      if (this.title.length > 2) {
        const payload = {
          newData: { title: this.title, description: this.description },
          statusId: this.$route.query.id,
        }
        this.$store.dispatch('addTask', payload)
        this.title = ''
        this.description = ''
        this.$router.push('/')
      }
    },

    // Handle back button click
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.new-task-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.icon-btn {
  cursor: pointer;
}

legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}

fieldset {
  margin: 24px 0 0 0;
}

input {
  margin-bottom: 1em;
}

label {
  color: #2b3e51;
  margin-bottom: 10px;
  display: block;
}

input[type='text'],
textarea {
  color: #2b3e51;
  display: block;
  width: 100%;
  appearance: none;
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}

textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}

textarea:focus,
input[type='text']:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

input[type='submit'] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  margin-top: 1em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
}
</style>
