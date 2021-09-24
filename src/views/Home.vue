<template>
  <div class="home">
    <div class="container mt-4">
      <div class="row">
        <Card v-for="task in tasks" :task="task" :key="task.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  async mounted() {
    await this.$store.dispatch("getTasks");
  },
};
</script>

<style lang="scss" scoped></style>
