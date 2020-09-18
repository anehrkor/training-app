<template>
  <div>
    <div class="row">
      <span style="text-align:center; margin:auto">
        {{ setLabel }}
      </span>
    </div>
    <div class="row">
      <div class="form-group col-md-4">
        <InputFieldBase
          label="#"
          v-model="setNumber"
          inputMaxLength="2"
          inputSize="2"
          @entered:baseValue="enterSetNumber"
        />
      </div>
      <div class="form-group col-md-4">
        <InputFieldBase
          label="Weight"
          v-model="weight"
          inputMaxLength="6"
          inputSize="6"
          @entered:baseValue="enterWeight"
        />
      </div>
      <div class="form-group col-md-4">
        <InputFieldBase
          label="Reps"
          v-model="reps"
          inputMaxLength="3"
          inputSize="3"
          @entered:baseValue="enterReps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputFieldBase from "@/components/InputFieldBase.vue";
export default {
  name: "set-input-fields",
  components: { InputFieldBase },
  props: {
    setLabel: { type: String, required: true, default: "" }
  },
  data: function() {
    return {
      setNumber: "",
      weight: "",
      reps: ""
    };
  },
  methods: {
    enterSetNumber(enteredSetNumber) {
      this.setNumber = enteredSetNumber;
    },
    enterWeight(enteredWeight) {
      this.weight = enteredWeight;
    },
    enterReps(enteredReps) {
      this.reps = enteredReps;
    },
    // TODO: how can this be called from outside the component?
    enterSet() {
      this.$emit("entered:set", {
        setNumber: this.setNumber,
        weight: this.weight,
        reps: this.reps
      });
    }
  }
};
</script>
