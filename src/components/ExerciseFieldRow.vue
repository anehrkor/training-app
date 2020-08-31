<template>
  <form>
    <div class="row">
      <div class="form-group col-md-3">
        <InputFieldExerciseChoice
          label="Exercise"
          selectDefault="Choose exercise"
          v-model="choices"
        />
      </div>
      <SetInputFields setLabel="Set 1" />
    </div>
  </form>
</template>

<script>
import InputFieldExerciseChoice from "@/components/InputFieldExerciseChoice.vue";
import SetInputFields from "@/components/SetInputFields.vue";
export default {
  name: "exercise-field-row",
  components: { InputFieldExerciseChoice, SetInputFields },
  data: function() {
    return { choices: [] };
  }
};
</script>
