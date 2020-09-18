<template>
  <div>
    <div class="row">
      <div class="form-group col-md-auto">
        <InputFieldExerciseChoice
          label="Exercise"
          selectDefault="Choose exercise"
          @selected:exercise="selectExercise"
        />
      </div>
      <div v-for="(set, index) in sets" :key="index">
        <div class="form-group col-md-auto">
          <SetInputFields :setLabel="set.setNumber" />
        </div>
        <div class="form-group col-md-auto">
          <button
            class="btn btn-secondary btn-sm float-right"
            title="Click to remove a set"
            @click="removeSet(index)"
          >
            &nbsp;-
          </button>
        </div>
      </div>
      <div class="form-group col-md-auto">
        <button
          class="btn btn-secondary btn-sm float-right"
          title="Click to add a set"
          @click="addSet"
        >
          &nbsp;+
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
    return { exercise: "", sets: [] };
  },
  methods: {
    addSet: function() {
      var nSet = "Set " + (this.sets.length + 1).toString();
      this.sets.push({ setNumber: nSet, weight: "", reps: "" });
    },
    removeSet: function(index) {
      this.sets.splice(index, 1);
    },
    selectExercise(selectedExercise) {
      this.exercise = selectedExercise;
    },
    // TODO: how can this be called and when should it be?
    addSetData(setData) {
      const setIndex = this.sets.findIndex(el => el.id === setData.setNumber);
      this.sets[setIndex] = {
        setNumber: setData.setNumber,
        weight: setData.weight,
        reps: setData.reps
      };
      console.log(this.sets);
    }
  }
};
</script>
