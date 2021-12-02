<template>
  <teleport to="#app">
    <Modal @closing="closing">
      <div id="checkout-container">
        <CheckoutPhase :slidingState="slidingPhase">
          <SelectPrices @next="slidingPhase = 1" />
        </CheckoutPhase>
        <CheckoutPhase :slidingState="slidingPhase">
          <ElementsCheckout @back="slidingPhase = 0" />
        </CheckoutPhase>
      </div>
    </Modal>
  </teleport>
</template>

<script>
import Modal from '@/atoms/Modal.vue';
import CheckoutPhase from '@/atoms/CheckoutPhase.vue';
import SelectPrices from '@/molecules/SelectPrices.vue';
import ElementsCheckout from '@/molecules/ElementsCheckout.vue';

export default {
  name: 'CheckoutCarousel',
  components: {
    CheckoutPhase,
    Modal,
    SelectPrices,
    ElementsCheckout,
  },
  data() {
    return {
      slidingPhase: 0,
    };
  },
  methods: {
    closing() {
      this.$store.dispatch('payment/endCheckout');
    },
  },
  mounted() {
    // TODO: fetch all informations about the product
  },
  props: {
    product: {
      required: true,
    },
  },
};
</script>

<style scoped>
#checkout-container {
  position: relative;
  display: flex;
  height: 500px;
  width: 400px;
  border-radius: 7px;
  overflow: hidden;
}
</style>
