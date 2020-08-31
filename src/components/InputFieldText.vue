<template>
  <form>
    <label for="text-label">{{ label }}</label>
    <p>
      <textarea
        :placeholder="placeholder"
        v-model="text"
        maxlength="140"
        width="100%"
        padding="5px"
      >
      </textarea>
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-text",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      text: ""
    };
  },
  watch: {
    text(val) {
      this.text = val.replace(/[^(a-zA-Z0-9):.!?'"&()/;öäüß-]/gi, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    textKeydown(e) {
      if (/[^(a-zA-Z0-9):.!?'"&()/;öäüß-]/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>
