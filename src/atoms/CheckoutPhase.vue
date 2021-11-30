<template>
  <div id="info-container" :class="['default', 'slide-left'][slidingState]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPhase',
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
#info-container {
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1 0 auto;
  transition: 1s transform;
  background: var(--grad-blue);
  border-radius: 7px;
}

.default {
  transform: translateX(0);
}

.slide-left {
  transform: translateX(-100%);
}

</style>
