<template>
  <form>
    <label for="exercise-choice">{{ label }}</label>
    <p>
      <select>
        <option disabled value="">{{ selectDefault }}</option>
        <option v-for="choice in choices" :key="choice">{{ choice }}</option>
      </select>
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-exercise-choice",
  props: {
    label: { type: String, required: false, default: "" },
    selectDefault: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      // must somehow be replaced by service call to database in the future
      choices: ["A", "B", "C"]
    };
  }
};
</script>
