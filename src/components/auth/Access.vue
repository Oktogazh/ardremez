<template>
  <div class="button" @click="toggle()">
    <h3>Access</h3>
  </div>
  <Modal v-if="opened" @closing="toggle()" v-bind:background="bgImage">
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
      // TODO create a btn and an 'Access' component
      // Then place (this) Portal and the btn in Access
      opened: false,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
