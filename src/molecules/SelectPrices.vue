<template>
  <OptionInfoButton v-for="(price, index) in prices" :info="price"
    :selected="selected" :key="index"/>
  <SubmitButton @click="$emit('next')">
    {{ translate.Continue }}
  </SubmitButton>
</template>

<script>
import { mapState } from 'vuex';
import OptionInfoButton from '@/atoms/buttons/OptionInfoButton.vue';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'SelectPrices',
  components: {
    OptionInfoButton,
    SubmitButton,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
      prices: (state) => state.payment.prices,
    }),
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>

<style scoped>
</style>
