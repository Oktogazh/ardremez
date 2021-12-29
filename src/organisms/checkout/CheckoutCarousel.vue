<template>
  <DualCarousel :slidingState="slidingPhase" @closing="closeThis">
    <template #firstSlot>
      <SelectPrices @selectPrice="selectPrice" />
    </template>
    <template #secondSlot>
      <StripeElements v-if="slidingPhase === 1" @back="slidingPhase = 0"
      :priceId="price"/>
    </template>
  </DualCarousel>
</template>

<script>
import { mapState } from 'vuex';
import DualCarousel from '@/molecules/DualCarousel.vue';
import SelectPrices from '@/molecules/checkout/SelectPrices.vue';
import StripeElements from '@/molecules/checkout/StripeElements.vue';

export default {
  name: 'CheckoutCarousel',
  components: {
    DualCarousel,
    SelectPrices,
    StripeElements,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
      loading: false,
      slidingPhase: 0,
      price: null,
    };
  },
  methods: {
    selectPrice(priceId) {
      this.price = priceId;
      this.slidingPhase = 1;
    },
    closeThis() {
      const { path } = this.$router.currentRoute.value;
      const newRoute = {
        path,
        query: {
          checkout: 'ending',
        },
      };
      this.$router.push(newRoute);
    },
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch('payment/loadPrices');
    this.load = false;
  },
  props: {
  },
};
</script>

<style scoped>
#checkout-container {
  position: relative;
  display: flex;
  height: fit-content;
  max-height: 100vh;
  width: 350px;
  max-width: 100vw;
  border-radius: 7px;
  overflow: hidden;
}
</style>
