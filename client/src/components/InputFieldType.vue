<template>
  <form>
    <label for="type-label">{{ label }}</label>
    <p>
      <input
        type="text"
        :placeholder="placeholder"
        v-model="type"
        maxlength="40"
        @keydown="typeKeydown($event)"
        @change="typeEntered"
      />
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-type",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      type: ""
    };
  },
  watch: {
    type(val) {
      this.type = val.replace(/[^(a-zA-Z)\s]/gi, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    typeKeydown(event) {
      if (/[^(a-zA-Z)\s]^\b/.test(event.key)) {
        event.preventDefault();
      }
    },
    typeEntered() {
      this.$emit("entered:type", this.type);
    }
  }
};
</script>
