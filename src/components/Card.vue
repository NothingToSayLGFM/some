<template>
  <div class="card" :class="{ checked: isChecked && !dashboard }">
    <div class="card-body">
      <h5 class="card-title">
        <span>{{ task.title }}</span
        ><img src="@/assets/check.png" v-if="isChecked && !dashboard" />
      </h5>
      <p class="card-text">
        {{ task.text }}
      </p>
      <router-link v-if="!dashboard" :to="{ path: `/task/${task.id}` }">{{
        $t("start")
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dashboard: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      require,
    },
  },
  computed: {
    isChecked() {
      if (this.user.question.find((el) => el.id === this.task.id)) {
        return true;
      }
      return false;
    },
    user() {
      return this.$store.state.auth.userInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 18rem;
  margin: 0.5rem;
}
.checked {
  pointer-events: none;
  opacity: 0.8;
  border-color: rgb(47, 255, 57);
}
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 100%;
    widows: 1.125rem;
    height: 1.125rem;
  }
}
</style>
