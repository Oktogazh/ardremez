<template>
  <div class="flex">
    <div class="space">
      <h3>{{ product.title }}</h3>
      <h3>{{ translate.for }}</h3>
    </div>
    <div class="prices-box">
      <OptionInfoButton v-for="(price, i) in prices" :info="price"
        :selected="selected" :key="i" @click="selected = i"/>
    </div>
    <SubmitButton @click="$emit('next')">
      {{ translate.Continue }}
    </SubmitButton>
  </div>
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
      product: (state) => state.payment.product,
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
* {
  text-align: center;
}

.flex {
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}

.prices-box {
  margin: 1em 0;
  display: flex;
  flex-flow: row wrap;
  grid-gap: 1em;
  align-items: center;
  justify-content: space-around;
}

.space {
  margin: 2em;
}
</style>
