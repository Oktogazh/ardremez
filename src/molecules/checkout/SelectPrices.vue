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
    <SubmitButton @click="next" :text="'Continue'" />
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
  created() {
    this.closeIfSubd();
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
      prices: (state) => state.payment.prices,
      product: (state) => state.payment.product,
      subsciptions: (state) => state.user.subscriptions,
    }),
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    closeIfSubd() {
      const seriesProdId = this.product.productId;
      const isAlreadySubd = (subObj) => {
        const { status, productId } = subObj;
        return ((productId === seriesProdId) && (status === 'active' || status === 'past_due'));
      };
      const canSubscribe = (this.subsciptions.filter(isAlreadySubd).length === 0);
      if (!canSubscribe) this.$emit('closing');
      return null;
    },
    next() {
      this.$emit('selectPrice', this.prices[this.selected].id);
    },
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
  gap: 1em;
}

.prices-box {
  margin: 1em 0;
  display: flex;
  flex-flow: row wrap;
  grid-gap: 1em;
  align-items: center;
  justify-content: space-around;
}
</style>
