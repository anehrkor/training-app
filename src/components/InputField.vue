<template>
  <form class="input-field">
    <label for="input-field-label">{{ label }}</label>
    <input type="text" :placeholder="placeholder" />
  </form>
</template>

<script>
export default {
  name: "input-field",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  }
};
</script>
