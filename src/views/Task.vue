<template>
  <div class="container mt-5" v-if="task">
    <h1 class="title">{{ task.title }}</h1>
    <p class="text">{{ task.text }}</p>
    <div class="answer mt-5">
      <div class="typ" v-if="task.type === 'typing'">
        <input
          class="form-control"
          v-model="answerType"
          type="text"
          placeholder="type a answer"
        />
      </div>
      <div class="checkboxes" v-if="task.type === 'checkboxes'">
        <div
          class="checkbox"
          v-for="(n, index) in task.questions"
          :key="`check-${index}`"
        >
          <input :id="n" type="checkbox" :value="n" v-model="checkboxes" />
          <label :for="n">{{ n }}</label>
        </div>
      </div>
      <div class="checkboxes" v-if="task.type === 'radios'">
        <div
          class="checkbox"
          v-for="(n, index) in task.questions"
          :key="`check-${index}`"
        >
          <input :id="n" type="radio" name="some" :value="n" v-model="radio" />
          <label :for="n">{{ n }}</label>
        </div>
      </div>
    </div>
    <button :disabled="isLoad" @click="submit" class="btn btn-success mt-5">
      {{ $t("submit") }}
    </button>
    <p v-if="isFail" class="error mt-5">{{ $t("error") }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      answerType: "",
      radio: null,
      checkboxes: [],
      isFail: false,
      isLoad: false,
    };
  },
  async mounted() {
    await this.$store.dispatch("getTaskById", this.$route.params.id);
  },
  methods: {
    async submit() {
      this.isFail = false;
      this.isLoad = true;
      if (this.task.type === "typing") {
        if (!this.answerType) {
          this.isFail = true;
          return;
        }
        const data = {
          id: this.task.id,
          user: this.userId,
          answer: this.answerType,
        };
        await this.$store.dispatch("answer", data);
        this.$router.push("/");
      } else if (this.task.type === "checkboxes") {
        if (!this.checkboxes.length) {
          this.isFail = true;
          return;
        }
        const data = {
          id: this.task.id,
          user: this.userId,
          answer: this.checkboxes,
        };
        await this.$store.dispatch("answer", data);
        this.$router.push("/");
      } else if (this.task.type === "radios") {
        if (!this.radio) {
          this.isFail = true;
          return;
        }
        const data = {
          id: this.task.id,
          user: this.userId,
          answer: this.radio,
        };
        await this.$store.dispatch("answer", data);
        this.$router.push("/");
      }
      this.isLoad = false;
    },
  },
  computed: {
    task() {
      return this.$store.state.task;
    },
    userId() {
      return this.$store.state.auth.userInfo.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  label {
    margin-left: 0.5rem;
  }
}
.error {
  background-color: rgba(212, 41, 41, 0.5);
  padding: 0.5rem;
  border: 1px solid rgb(212, 41, 41);
  border-radius: 0.75rem;
}
</style>
