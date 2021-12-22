<template>
  <BasicInput />
  <SubmitButton />
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
};
</script>

<style scoped>
</style>
