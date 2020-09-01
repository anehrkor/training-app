<template>
  <div>
    <div class="row">
      <div class="form-group col-md">
        <InputFieldExerciseChoice
          label="Exercise"
          selectDefault="Choose exercise"
          v-model="exerciseChoices"
        />
      </div>
      <div class="form-group col-md-6">
        <SetInputFields setLabel="Set 1" />
      </div>
      <div>
        <SetInputFields setLabel="Set 2" />
      </div>
      <div class="form-group col-md">
        <button
          class="btn btn-secondary float-right"
          title="Click to add an exercise"
        >
          &nbsp;Add a set
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputFieldExerciseChoice from "@/components/InputFieldExerciseChoice.vue";
import SetInputFields from "@/components/SetInputFields.vue";
export default {
  name: "exercise-field-row",
  components: { InputFieldExerciseChoice, SetInputFields },
  data: function() {
    return { exerciseChoices: [] };
  }
};
</script>
