<template>
  <form>
    <label for="training-choice">{{ label }}</label>
    <p>
      <select>
        <option disabled value="">{{ selectDefault }}</option>
        <option v-for="trainingChoice in trainingChoices" :key="trainingChoice">
          {{ trainingChoice }}
        </option>
      </select>
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-training-choice",
  props: {
    label: { type: String, required: false, default: "" },
    selectDefault: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      // must somehow be replaced by service call to database in the future
      trainingChoices: ["A", "B", "C"]
    };
  }
};
</script>
