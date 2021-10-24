<template>
  <div class="button" @click="toggle()">
    click here
  </div>
  <Modal v-if="opened">
  </Modal>
</template>

<script>
import Modal from '@/components/utils/Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
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
