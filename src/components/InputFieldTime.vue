<template>
  <form>
    <label for="time-label">{{ label }}</label>
    <p>
      <input
        type="text"
        :placeholder="placeholder"
        v-model="time"
        maxlength="5"
        size="5"
      />
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-time",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      time: ""
    };
  },
  watch: {
    time(val) {
      this.time = val.replace(/[^(0-9):]/gi, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    timeKeydown(e) {
      if (/[^(0-9):]/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>
