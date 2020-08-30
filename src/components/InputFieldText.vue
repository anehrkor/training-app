<template>
  <form class="input-field-text">
    <label for="input-field-text-label">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="text"
      maxlength="140"
    />
  </form>
</template>

<script>
export default {
  name: "input-field-text",
  props: {
    label: { type: String, required: false, default: "Text" },
    placeholder: { type: String, required: false, default: "Enter text" }
  },
  data: function() {
    return {
      text: ""
    };
  },
  watch: {
    text(val) {
      this.text = val.replace(/\W/g, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    textKeydown(e) {
      if (/^\W$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>
