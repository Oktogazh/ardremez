<template>
  <button ref="playIcon" @click="switchState">
  </button>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'PlayPause',
  data() {
    return {
      playing: false,
    };
  },
  methods: {
    mountTheIcon() {
      const container = this.$refs.playIcon;

      this.animation = lottie.loadAnimation({
        container,
        path: '/lottie/pause.json',
        render: 'svg',
        loop: false,
        autoplay: false,
        name: 'PlayPause Animation',
      });

      this.animation.goToAndStop(14, true);
    },
    switchState() {
      if (this.playing) {
        this.animation.playSegments([0, 14], true);
        this.playing = false;
      } else {
        this.animation.playSegments([14, 27], true);
        this.playing = true;
      }
    },
  },
  mounted() {
    this.mountTheIcon();
  },
  props: {
    size: {
      required: true,
    },
  },
};
</script>

<style scoped>
#play-icon {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
