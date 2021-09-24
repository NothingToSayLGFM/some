<template>
  <form @submit.prevent="create">
    <div class="container mt-5">
      <div class="form-group">
        <label for="title">{{ $t("ttitle") }}</label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="title"
          :placeholder="$t('ttitle')"
        />
      </div>
      <div class="form-group">
        <label for="text">{{ $t("ttext") }}</label>
        <textarea
          name="text"
          class="form-control"
          id="text"
          cols="30"
          rows="10"
          v-model="text"
        ></textarea>
      </div>
      <div class="checboxes">
        <p class="mt-5">{{ $t("chose") }}</p>
        <div class="z">
          <label for="html">{{ $t("ya") }}</label>
          <input
            v-model="currentOption"
            type="radio"
            name="fav_language"
            id="html"
            value="one"
          />
        </div>
        <div class="z">
          <label for="css">{{ $t("wo") }}</label>
          <input
            v-model="currentOption"
            type="radio"
            name="fav_language"
            id="css"
            value="two"
          />
        </div>
        <div class="z">
          <label for="js">{{ $t("on") }}</label>
          <input
            v-model="currentOption"
            type="radio"
            name="fav_language"
            id="js"
            value="three"
          />
        </div>
        <CreateOptions ref="create" :currentOption="currentOption" />
      </div>
      <button :disabled="isLoad" type="submit" class="s mt-5 btn btn-success">
        {{ $t("create") }}
      </button>
    </div>
  </form>
</template>

<script>
import CreateOptions from "@/components/CreateOptions.vue";

export default {
  name: "CreateTask",
  components: { CreateOptions },
  data() {
    return {
      currentOption: null,
      isLoad: false,
      title: "",
      text: "",
    };
  },
  methods: {
    async create() {
      this.isLoad = true;
      const data = {};
      if (this.currentOption === "one") {
        data.type = "typing";
        data.rightUnswer = [this.$refs.create.en, this.$refs.create.ua];
      } else if (this.currentOption === "two") {
        data.type = "checkboxes";
        data.questions = [];
        for (
          let i = 0;
          i < this.$refs.create.$el.querySelectorAll(".checkbox").length;
          i++
        ) {
          data.questions.push(
            this.$refs.create.$el.querySelectorAll(".checkbox")[i].value
          );
        }
      } else if (this.currentOption === "three") {
        data.type = "radios";
        data.questions = [];
        for (
          let i = 0;
          i < this.$refs.create.$el.querySelectorAll(".radio").length;
          i++
        ) {
          data.questions.push(
            this.$refs.create.$el.querySelectorAll(".radio")[i].value
          );
        }
      }
      data.title = this.title;
      data.text = this.text;
      this.text = "";
      this.title = "";
      this.currentOption = null;
      await this.$store.dispatch("createTask", data);
      this.isLoad = false;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}
.z {
  display: flex;
  align-items: center;
  label {
    margin-right: 0.5rem;
  }
}
.s {
  width: 100%;
}
</style>
