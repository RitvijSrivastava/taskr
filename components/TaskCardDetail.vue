<template>
  <div>
    <b-form
      class="task-detail-form"
      @submit.prevent="submit"
      @reset.prevent="reset"
    >
      <fieldset>
        <legend>
          <font-awesome-icon
            class="icon-btn"
            :icon="['fas', 'arrow-left']"
            @click="goBack()"
          />
          Task Details
          <font-awesome-icon
            class="icon-btn float-right mt-2"
            :icon="['fas', 'trash-alt']"
            @click="deleteTask()"
          />
        </legend>
        <div>
          <label class="label" for="title">Title</label>
          <b-form-input
            id="title"
            v-model="title"
            type="text"
            name="title"
            :state="oldData.title !== title ? titleValidation : null"
            min-length="3"
          />
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>
        </div>
        <div>
          <label class="label" for="newStatus">Task Status</label>
          <b-form-select
            v-model="newStatus"
            :options="options"
            class="status"
          ></b-form-select>
        </div>
        <div>
          <label class="label" for="textarea">Task Description</label>
          <b-form-textarea
            id="textarea"
            v-model="description"
            class="description"
            name="textarea"
          ></b-form-textarea>
        </div>
        <div>
          <input type="reset" value="Cancel" />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </fieldset>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      oldData: {},
      oldStatus: {},
      title: '',
      description: '',
      newStatus: {},
      options: [],
    }
  },
  computed: {
    ...mapState(['status']),
    titleValidation() {
      return this.title.length > 2
    },
  },
  mounted() {
    const data = this.$store.getters.getTaskDetailById(this.$route.params.id)

    this.newStatus = data.status
    const newOptions = [{ value: data.status, text: data.status.status }]
    this.status.map(
      (s) =>
        s.id !== data.status.id && newOptions.push({ value: s, text: s.status })
    )
    this.oldData = data.task
    this.oldStatus = data.status
    this.title = data.task.title
    this.description = data.task.description
    this.options = newOptions
  },
  methods: {
    submit() {
      if (this.title.length > 2) {
        const payload = {
          oldTask: this.oldData,
          newTask: {
            id: this.oldData.id,
            statusId: this.newStatus.id,
            title: this.title,
            description: this.description,
          },
        }
        window.console.log(payload)
        this.$store.dispatch('editTask', payload)
        this.$router.push('/')
      }
    },
    reset() {
      this.newStatus = this.oldStatus
      const newOptions = [
        { value: this.oldStatus, text: this.oldStatus.status },
      ]
      this.status.map(
        (s) =>
          s.id !== this.oldStatus.id &&
          newOptions.push({ value: s, text: s.status })
      )
      this.title = this.oldData.title
      this.description = this.oldData.description
      this.options = newOptions
    },
    deleteTask() {
      if (confirm('Are you sure you want to delete this task ?')) {
        const payload = { oldTask: this.oldData }
        this.$store.dispatch('deleteTask', payload)
        this.$router.push('/')
      }
    },
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.task-detail-form {
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

input,
.status {
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
  background: rgb(27, 187, 27);
}

input[type='reset'] {
  background: rgb(120, 121, 120);
}

input[type='submit'],
input[type='reset'] {
  border: none;
  border-radius: 0.25em;
  margin-top: 1em;
  margin-left: 1em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
}
</style>
