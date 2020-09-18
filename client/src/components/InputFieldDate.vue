<template>
  <form>
    <label for="date-label">{{ label }}</label>
    <p>
      <input
        type="text"
        :placeholder="placeholder"
        v-model="date"
        maxlength="10"
        @change="dateEntered"
      />
    </p>
  </form>
</template>

<script>
export default {
  name: "input-field-date",
  props: {
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      date: ""
    };
  },
  watch: {
    date(val) {
      this.date = val.replace(/[^(0-9).]/gi, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    dateKeydown(event) {
      if (/[^(0-9).]/.test(event.key)) {
        event.preventDefault();
      }
    },
    dateEntered() {
      this.$emit("entered:date", this.date);
    }
  }
};
</script>
