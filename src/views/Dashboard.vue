<template>
  <div class="container mt-5">
    <div class="title">
      <h1>{{ $t("dash") }}</h1>
      <router-link class="btn btn-success" to="/create">{{
        $t("create")
      }}</router-link>
    </div>
    <div class="row">
      <Card
        :dashboard="true"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  name: "Dashboard",
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
}
</style>
