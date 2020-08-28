<template>
  <form class="base-input-field">
    <label for="base-input-field-label">{{ label }}</label>
    <input type="text" :placeholder="placeholder" />
  </form>
</template>

<script>
export default {
  name: "base-input-field",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  }
};
</script>
