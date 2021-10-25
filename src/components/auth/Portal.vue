<template>
  <div class="button" @click="toggle()">
    click here
  </div>
  <Modal v-if="opened" @closing="toggle()" v-bind:background="bgImage">
    <Form />
  </Modal>
</template>

<script>
import Modal from '@/components/utils/Modal.vue';
import Form from '@/components/auth/Form.vue';

export default {
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
  display: block;
  position: absolute;
}
</style>
