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
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1em;
  transition: .7s transform;
  background: var(--grad-blue);
}

.default {
  transform: translateX(0);
}

.slide-left {
  transform: translateX(-100%);
}

</style>
