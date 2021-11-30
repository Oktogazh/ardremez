<template>
  <teleport to="body">
    <Modal @closing="$router.push('/dashboard')">
      <div id="checkout-container">
        <CheckoutPhase :slidingState="slidingPhase"
          @next="slidingPhase = 1" @back="slidingPhase = 0">
        </CheckoutPhase>
        <CheckoutPhase :slidingState="slidingPhase"
          @next="slidingPhase = 1" @back="slidingPhase = 0">
        </CheckoutPhase>
      </div>
    </Modal>
  </teleport>
</template>

<script>
import Modal from '@/atoms/Modal.vue';
import CheckoutPhase from '@/atoms/CheckoutPhase.vue';

export default {
  name: 'CheckoutCarousel',
  components: {
    CheckoutPhase,
    Modal,
  },
  data() {
    return {
      slidingPhase: 0,
    };
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
  overflow: hidden;
}
</style>
