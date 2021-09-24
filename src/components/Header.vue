<template>
  <header>
    <div class="container">
      <button class="btn my" @click="setLocale">{{ $i18n.locale }}</button>
      <div class="nav">
        <router-link to="/">{{ $t("tests") }}</router-link>
        <router-link :to="{ path: info ? '/' : '/login' }">{{
          info ? info.login : $t("login")
        }}</router-link>
        <router-link to="/dashboard" v-if="info && info.role === 'admin'">{{
          $t("dash")
        }}</router-link>
        <button class="btn my" @click="logout" v-if="info">
          {{ $t("logout") }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    info() {
      return this.$store.state.auth.userInfo;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    setLocale() {
      if (this.$i18n.locale === "ua") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "ua";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(0, 89, 255);
  padding: 0.938rem;
  .container {
    display: flex;
    justify-content: space-between;
  }
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    &:first-child {
      margin-right: 0.938rem;
    }
    &:nth-child(2) {
      margin-right: 0.938rem;
    }
  }
  .my {
    padding: 0;
    color: #fff;
    margin-left: 0.938rem;
  }
}
</style>
