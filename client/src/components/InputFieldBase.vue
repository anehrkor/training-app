<template>
  <form>
    <label for="base-label">{{ label }}</label>
    <p>
      <input
        type="text"
        :placeholder="placeholder"
        :maxlength="inputMaxLength"
        :size="inputSize"
        v-model="input"
        @change="baseValueEntered"
      />
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-base",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
    inputMaxLength: { type: String, required: false, default: "" },
    inputSize: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      input: ""
    };
  },
  methods: {
    baseValueEntered() {
      this.$emit("entered:baseValue", this.input);
    }
  }
};
</script>
