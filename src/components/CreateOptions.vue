<template>
  <div class="mt-3">
    <div class="your-answer" v-if="currentOption === 'one'">
      <input
        class="form-control mt-3"
        type="text"
        placeholder="Введіть правильну відповідь УКР"
        v-model="ua"
      />
      <input
        class="form-control mt-3"
        type="text"
        placeholder="Type correct answer EN"
        v-model="en"
      />
    </div>
    <div v-if="currentOption === 'two'">
      <button class="btn btn-primary" type="button" @click="addOption">
        {{ $t("add") }}
      </button>
      <input
        v-for="n in checkboxes"
        :key="`checkboxes-${n}`"
        type="text"
        class="mb-2 mt-2 form-control checkbox"
        :placeholder="$t('typeAnswer')"
      />
    </div>
    <div v-if="currentOption === 'three'">
      <button class="btn btn-primary" type="button" @click="addOption">
        {{ $t("add") }}
      </button>
      <input
        v-for="n in checkboxes"
        :key="`radio-${n}`"
        type="text"
        class="mb-2 mt-2 form-control radio"
        :placeholder="$t('typeAnswer')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateOptions",
  props: {
    currentOption: {
      default: null,
    },
  },
  data() {
    return {
      checkboxes: 0,
      ua: "",
      en: "",
    };
  },
  watch: {
    currentOption() {
      this.checkboxes = 0;
    },
  },
  methods: {
    addOption() {
      this.checkboxes++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
