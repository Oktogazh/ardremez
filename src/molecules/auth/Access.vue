<template>
  <Modal @closing="closeThis">
    <div class="access-container">
      <Form @logged="logged"/>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/atoms/Modal.vue';
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
    closeThis() {
      this.$router.push({ path: this.$store.state.app.redirectRoute });
      this.$store.dispatch('app/notLogging');
    },
    logged() {
      this.$router.push(this.$store.state.app.nextRoute);
      this.$store.dispatch('app/notLogging');
    },
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(54, 54, 54, 0.65);
  background-image: url(/img/Beg_ar_Vann.jpg);
}
</style>
