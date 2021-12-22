<template>
  <Modal @closing="$emit('closing')">
    <div id="carousel-container">
      <div id="info-container" :class="['default', 'slide-left'][slidingState]">
        <slot name="firstSlot"></slot>
      </div>
      <div id="info-container" :class="['default', 'slide-left'][slidingState]">
        <slot name="secondSlot"></slot>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/atoms/Modal.vue';

export default {
  name: 'DualCarousel',
  components: {
    Modal,
  },
  computed: {
  },
  props: {
    slidingState: {
      required: true,
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
#carousel-container {
  position: relative;
  display: flex;
  height: fit-content;
  max-height: 100vh;
  width: 350px;
  max-width: 100vw;
  border-radius: 7px;
  overflow: hidden;
  background: var(--card-background);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(54, 54, 54, 0.65);
}

#info-container {
  position: relative;
  height: auto;
  max-height: 100%;
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1em;
  transition: .7s transform;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#info-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}

.default {
  transform: translateX(0);
}

.slide-left {
  transform: translateX(-100%);
}

</style>
