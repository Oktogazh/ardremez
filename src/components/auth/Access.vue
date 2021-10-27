<template>
  <Modal @closing="$emit('closing')" v-bind:background="bgImage">
    <Form />
  </Modal>
</template>

<script>
import Modal from '@/components/utils/Modal.vue';
import Form from '@/components/auth/Form.vue';

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
  methods: {
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
