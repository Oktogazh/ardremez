<template>
  <button ref="playIcon" id="play-icon" @click="switchState">
  </button>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'PlayPause',
  data() {
    return {
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
      const audio = document.getElementById('audio');

      if (this.playing) {
        audio.pause();
        this.animation.playSegments([0, 14], true);
        this.$emit('pause');
      } else {
        audio.play();
        this.animation.playSegments([14, 27], true);
        this.$emit('play');
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
    playing: {
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
#play-icon {
  width: v-bind(size);
  height: v-bind(size);
  cursor: pointer;
}
</style>
