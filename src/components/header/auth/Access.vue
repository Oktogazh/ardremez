<template>
  <Modal @closing="$emit('closing', 'accessPortal')" v-bind:background="bgImage">
    <div class="access-container">
      <Form @closing="$emit('closing', 'accessPortal')" @logged="$emit('logged', 'accessPortal')"/>
    </div>
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

.access-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  padding: 5%;
  border-radius: 2rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(54, 54, 54, 0.65);
  background-image: url(/img/Beg_ar_Vann.jpg);
}
</style>
