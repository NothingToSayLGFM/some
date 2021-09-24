<template>
  <div class="container mt-5">
    <div class="some">
      <p>{{ $t("acc") }}</p>
      <router-link to="/register">{{ $t("register") }}</router-link>
    </div>
    <AuthForm />
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
  name: "Login",
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
