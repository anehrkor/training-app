<template>
  <form>
    <label for="text-label">{{ label }}</label>
    <p>
      <textarea
        :placeholder="placeholder"
        v-model="text"
        maxlength="140"
        @keydown="textKeydown($event)"
        @change="textEntered"
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
      this.text = val.replace(/[^(a-zA-Z0-9):.!?'"&()/;öäüß-\s]/gi, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    textKeydown(event) {
      if (/[^(a-zA-Z0-9):.!?'"&()/;öäüß-\s]^\b/.test(event.key)) {
        event.preventDefault();
      }
    },
    textEntered() {
      this.$emit("entered:text", this.text);
    }
  }
};
</script>
