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
          v-model="input"
          inputMaxLength="2"
          inputSize="2"
        />
      </div>
      <div class="form-group col-md-4">
        <InputFieldBase
          label="Weight"
          v-model="input"
          inputMaxLength="6"
          inputSize="6"
        />
      </div>
      <div class="form-group col-md-4">
        <InputFieldBase
          label="Reps"
          v-model="input"
          inputMaxLength="3"
          inputSize="3"
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
    return { input: "" };
  }
};
</script>
