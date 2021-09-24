<template>
  <form class="form" @submit.prevent="sumbitHandler">
    <div class="form-group">
      <label for="login">{{ $t("loginTitle") }}</label>
      <input
        type="text"
        class="form-control"
        id="login"
        placeholder="Enter login"
        v-model.trim="login"
      />
    </div>
    <div class="form-group">
      <label for="password">{{ $t("password") }}</label>
      <input
        type="password"
        class="form-control"
        id="password"
        :placeholder="$t('password')"
        v-model.trim="password"
      />
    </div>
    <button
      :disabled="isLoadig || isFilled"
      class="btn btn-success mt-4"
      type="submit"
    >
      {{ isLogin ? $t("login") : $t("register") }}
    </button>
    <p v-if="isFail" class="error mt-5">{{ $t("error") }}</p>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      login: "",
      password: "",
      isLoadig: false,
    };
  },
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isFail() {
      return this.$store.state.auth.fail;
    },
    isFilled() {
      return !this.login || !this.password;
    },
  },
  methods: {
    async sumbitHandler() {
      if (!this.login || !this.password) {
        return;
      }
      this.isLoadig = true;
      const formData = {
        login: this.login,
        password: this.password,
      };
      if (this.isLogin) {
        await this.$store.dispatch("login", formData);
      } else {
        await this.$store.dispatch("register", formData);
      }
      this.login = "";
      this.password = "";
      this.isLoadig = false;
      if (!this.isFail) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
}
.form-group {
  &:first-child {
    margin-bottom: 1rem;
  }
}
.error {
  background-color: rgba(212, 41, 41, 0.5);
  padding: 0.5rem;
  border: 1px solid rgb(212, 41, 41);
  border-radius: 0.75rem;
}
</style>
