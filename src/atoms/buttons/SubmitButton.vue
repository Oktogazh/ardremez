<template>
  <button type="submit" class="submit-button" v-html="innerText" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SubmitButton',
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
    innerText() {
      return this.translate[this.text ? this.text : 'Submit'];
    },
  },
  data() {
    return {
      defaultText: this.$store.state.lang.Submit,
    };
  },
  props: {
    text: {
      type: String,
      required: false,
      default: null,
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
  margin: 2em;
}
.submit-button:hover {
  opacity: 1;
  box-shadow: var(--wide-box-shadow)  var(--light-black);
}
</style>
