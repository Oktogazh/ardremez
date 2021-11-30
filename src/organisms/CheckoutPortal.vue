<template>
  <teleport to="body">
    <Modal @closing="$router.push('/dashboard')">
      <div id="checkout-container">
        <CheckoutInfo :slidingState="slidingPhase"
          @next="slidingPhase = 1" @back="slidingPhase = 2"/>
        <CheckoutInfo :slidingState="slidingPhase"
          @next="slidingPhase = 1" @back="slidingPhase = 2"/>
      </div>
    </Modal>
  </teleport>
</template>

<script>
import Modal from '@/atoms/Modal.vue';
import CheckoutInfo from '@/molecules/CheckoutInfo.vue';

export default {
  name: 'CheckoutPortal',
  components: {
    CheckoutInfo,
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
