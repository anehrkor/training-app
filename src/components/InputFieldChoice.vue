<template>
  <form class="input-field-choice">
    <label for="input-field-choice-label">{{ label }}</label>
    <select>
      <option disabled value="">{{ selectDefault }}</option>
      <option v-for="choice in choices" :key="choice">{{ choice }}</option>
    </select>
  </form>
</template>

<script>
export default {
  name: "input-field-choice",
  props: {
    label: { type: String, required: false, default: "Training type" },
    selectDefault: { type: String, required: false, default: "Choose type" }
  },
  data: function() {
    return {
      // must somehow be replaced by service call to database in the future
      choices: ["A", "B", "C"]
    };
  }
};
</script>
