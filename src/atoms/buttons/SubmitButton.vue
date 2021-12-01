<template>
  <button class="submit-button">
    <slot>{{ defaultText }}</slot>
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  data() {
    return {
      defaultText: this.$store.state.lang.Submit,
    };
  },
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.submit-button {
  padding: 1em;
  background: rgb(0, 224, 63);
  border-radius: 4px;
  font-weight: bold;
  color: var(--lighter-white);
  opacity: .85;
  box-shadow: var(--wide-box-shadow)  var(--lighter-black);
}
.submit-button:hover {
  opacity: 1;
  box-shadow: var(--wide-box-shadow)  var(--light-black);
}
</style>
