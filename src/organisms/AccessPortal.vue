<template>
  <Modal @closing="closeThis">
    <div v-if="false" class="access-container">
      <Form @logged="logged"/>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/atoms/Modal.vue';
import Form from '@/molecules/accessPortal/Form.vue';

export default {
  name: 'AccessPortal',
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
      const { redirectRoute } = this.$store.state.app;

      this.$store.dispatch('app/notLogging', { next: redirectRoute });
    },
    logged() {
      const { path } = this.$router.currentRoute.value;
      const { nextRoute } = this.$store.state.app;
      const next = nextRoute || path;

      this.$store.dispatch('app/notLogging', { next });
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
