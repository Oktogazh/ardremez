<template>
  <button class="skip-icon rotate" ref="skipIcon" @click="playAnimation">
  </button>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'Skip',
  data() {
    return {
      animation: null,
    };
  },
  methods: {
    mountTheIcon() {
      const container = this.$refs.skipIcon;

      this.animation = lottie.loadAnimation({
        container,
        path: '/lottie/skip.json',
        render: 'svg',
        loop: false,
        autoplay: false,
        name: 'The Skip Animation',
      });

      this.animation.goToAndStop(0, true);
    },
    playAnimation() {
      this.animation.playSegments([0, 24], true);
    },
  },
  mounted() {
    this.mountTheIcon();
  },
  props: {
    angle: {
      required: false,
      default: '0deg',
    },
    size: {
      required: true,
    },
  },
};
</script>

<style scoped>
.skip-icon {
  position: relative;
  height: calc(v-bind(size) * .8);
  width: calc(v-bind(size) * .8);
  margin: 0 5px;
  cursor: pointer;
}

.rotate {
  transform: rotate(v-bind(angle));
  transform-origin: 50% 50%;
}

:deep(*) {
  stroke-width: 1;
}
</style>
