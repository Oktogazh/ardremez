<template>
  <SubmitButton @click="$emit('next')">
    {{ translate.Continue }}
  </SubmitButton>
</template>

<script>
import { mapState } from 'vuex';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'SelectPrices',
  components: {
    SubmitButton,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
};
</script>

<style scoped>
</style>
