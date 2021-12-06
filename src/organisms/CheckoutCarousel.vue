<template>
  <teleport to="#app">
    <Modal @closing="closing">
      <div id="checkout-container">
        <CheckoutPhase :slidingState="slidingPhase">
          <SelectPrices @selectPrice="selectPrice" />
        </CheckoutPhase>
        <CheckoutPhase :slidingState="slidingPhase">
          <StripeElements @back="slidingPhase = 0" :price="price"/>
        </CheckoutPhase>
      </div>
    </Modal>
  </teleport>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/atoms/Modal.vue';
import CheckoutPhase from '@/atoms/CheckoutPhase.vue';
import SelectPrices from '@/molecules/SelectPrices.vue';
import StripeElements from '@/molecules/StripeElements.vue';

export default {
  name: 'CheckoutCarousel',
  components: {
    CheckoutPhase,
    Modal,
    SelectPrices,
    StripeElements,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
      product: (state) => state.payment.product,
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
      this.slidingPhase = 1;
      this.price = priceId;
    },
    closing() {
      this.$store.dispatch('payment/endCheckout');
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
