<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },
  mounted() {
    console.log(this.$t);
  },
};
</script>

<style lang="scss"></style>
