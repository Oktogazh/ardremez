<template>
  <Modal @closing="$emit('closing', 'accessPortal')" v-bind:background="bgImage">
    <Form @closing="$emit('closing', 'accessPortal')" />
  </Modal>
</template>

<script>
import Modal from '@/components/utils/Modal.vue';
import Form from './Form.vue';

export default {
  name: 'Access',
  components: {
    Form,
    Modal,
  },
  data() {
    return {
      bgImage: '/pictures/Beg_ar_Vann.jpg',
    };
  },
  methods: { // TODO: create a closing method
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
