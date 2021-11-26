<template>
  <div id="player-outer-container">
    <audio id="audio" preload=”metadata”></audio>
    <Progression/>
    <Controler />
  </div>
</template>

<script>
import Controler from '@/molecules/Controler.vue';
import Progression from '@/molecules/Progression.vue';

export default {
  name: 'Player',
  components: {
    Controler,
    Progression,
  },
  methods: {
    downloadAudio() {
      const { api } = this.$store.state;
      const id = this.$route.query.p;

      if (!id) return null;

      const audio = document.getElementById('audio');
      const audioSourceURI = `${api}/api/selaou/${id}`;

      audio.src = audioSourceURI;

      return null;
    },
  },
  mounted() {
    this.downloadAudio();
  },
  watch: {
    $route() {
      this.downloadAudio();
    },
  },
};
</script>

<style scoped>
#player-outer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--player-height);
  background: var(--dark-black);
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}

:deep(*) {
  color: var(--light-white);
  stroke: white;
  stroke-linecap: round;
  stroke-dasharray: none;
  fill: none;
}
</style>
