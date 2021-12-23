<template>
  <Modal @closing="$emit('closing')">
    <div id="carousel-container" :style="styling">
      <div class="slot-container" :class="['default', 'slide-left'][slidingState]">
        <slot name="firstSlot"></slot>
      </div>
      <div class="slot-container" :class="['default', 'slide-left'][slidingState]">
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
    styling() {
      const { bg, minHeight } = this;
      const styling = {};
      if (bg) styling['--background'] = bg;
      if (minHeight) styling['--min-height'] = minHeight;
      return styling;
    },
  },
  props: {
    slidingState: {
      required: true,
      type: Number,
      default: 0,
    },
    bg: {
      required: false,
      type: String,
      default: null,
    },
    minHeight: {
      required: false,
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
#carousel-container {
  position: relative;
  display: flex;
  height: fit-content;
  min-height: var(--min-height);
  max-height: 100vh;
  width: 350px;
  max-width: 100vw;
  border-radius: 7px;
  overflow: hidden;
  background-color: var(--card-background); /* fallback color */
  background-image: var(--background); /* images || grad || ↑↑ */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(54, 54, 54, 0.65);
}

.slot-container {
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
.slot-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}

.default {
  transform: translateX(0);
}

.slide-left {
  transform: translateX(-100%);
}

</style>
