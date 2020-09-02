<template>
  <div>
    <div class="row">
      <div class="form-group col-md-auto">
        <InputFieldExerciseChoice
          label="Exercise"
          selectDefault="Choose exercise"
          v-model="exerciseChoices"
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
    return { exerciseChoices: [], sets: [] };
  },
  methods: {
    addSet: function() {
      var nSet = "Set " + (this.sets.length + 1).toString();
      this.sets.push({ setNumber: nSet });
    },
    removeSet: function(index) {
      this.sets.splice(index, 1);
    }
  }
};
</script>
