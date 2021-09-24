<template>
  <div class="container mt-5">
    <div class="some">
      <p>{{ $t("acc2") }}</p>
      <router-link to="/login">{{ $t("login") }}</router-link>
    </div>
    <AuthForm :isLogin="false" />
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
  name: "Register",
  components: { AuthForm },
};
</script>

<style lang="scss" scoped>
.some {
  display: flex;
  justify-content: center;
  align-items: center;
  p,
  a {
    margin-bottom: 0;
    padding: 0;
  }
  a {
    margin-left: 0.5rem;
  }
}
</style>
