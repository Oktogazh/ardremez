<template>
  <div id="info-container" :class="['default', 'slide-left', 'slide-right'][slidingState]">
    <button @click="$emit('back')">change state</button>
    <button @click="$emit('next')">change state</button>
  </div>
</template>

<script>
export default {
  name: 'CheckoutInfo',
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
}

.slide-left {
  transform: translateX(-100%);
}

.slide-right {
  transform: translateX(0);
}

</style>
