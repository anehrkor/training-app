<template>
  <form>
    <label for="exercise-choice">{{ label }}</label>
    <p>
      <select @change="onChange($event)">
        <option value="">{{ selectDefault }}</option>
        <option
          v-for="exerciseChoice in exerciseChoices"
          :key="exerciseChoice"
          >{{ exerciseChoice }}</option
        >
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
      exerciseChoices: ["A", "B", "C"],
      selectedExercise: ""
    };
  },
  methods: {
    onChange(event) {
      this.selectedExercise = event.target.value;
      this.$emit("selected:exercise", this.selectedExercise);
    }
  }
};
</script>
