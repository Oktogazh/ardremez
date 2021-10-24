<template>
  <div class="button" @click="toggle()">
    click here
  </div>
  <Modal v-if="opened" @closing="toggle()">
    <div class="whiteBlock">

    </div>
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

.whiteBlock {
  background-color: white;
  width: 3rem;
  height: 3rem;

}
</style>
