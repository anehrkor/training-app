<template>
  <form class="input-field-time">
    <label for="input-field-time-label">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="time"
      maxlength="4"
    />
  </form>
</template>

<script>
export default {
  name: "input-field-time",
  props: {
    label: { type: String, required: false, default: "Time" },
    placeholder: { type: String, required: false, default: "Enter time" }
  },
  data: function() {
    return {
      time: ""
    };
  },
  watch: {
    time(val) {
      this.time = val.replace(/\W/g, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    timeKeydown(e) {
      if (/^\W$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>
