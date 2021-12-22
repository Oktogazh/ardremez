<template>
  <div class="form-container">
    <BasicInput type="email" @input="setEmail" />
    <SubmitButton />
  </div>
</template>

<script>
import BasicInput from '@/atoms/inputs/BasicInput.vue';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'EmailForm',
  components: {
    BasicInput,
    SubmitButton,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    setEmail({ target }) {
      this.email = target.value;
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 1em;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
