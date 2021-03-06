<template>
  <div id="player-outer-container">
    <audio id="audio" preload=”metadata” :onended="endOfPodcast"></audio>
    <ProgressBar :duration="duration" :currentTime="currentTime"/>
    <Controler />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Controler from '@/molecules/player/Controler.vue';
import ProgressBar from '@/molecules/player/ProgressBar.vue';

export default {
  name: 'Player',
  components: {
    Controler,
    ProgressBar,
  },
  computed: {
    id() {
      const { chapterId } = this.$route.params;
      return chapterId || '';
    },
    ...mapState({
      api: (state) => state.api,
      openCardOnEnded: (state) => state.chapter.openCardOnEnded,
    }),
  },
  data() {
    return {
      duration: 0,
      currentTime: 0,
    };
  },
  methods: {
    downloadAudio() {
      const { api, id } = this;

      if (!id) return null;

      const audio = document.getElementById('audio');
      const audioSourceURI = `${api}/api/selaou/${id}`;

      audio.src = audioSourceURI;

      if (audio.readyState > 0) {
        this.duration = audio.duration;
      } else {
        audio.addEventListener('loadedmetadata', () => {
          this.duration = audio.duration;
        });
      }

      audio.addEventListener('timeupdate', () => {
        this.currentTime = audio.currentTime;
      });

      return null;
    },
    endOfPodcast() {
      const id = `header-${this.openCardOnEnded}`;
      const cardToOpen = document.getElementById(id);
      const playIcon = document.getElementById('play-icon');

      cardToOpen.click();
      playIcon.click();
    },
  },
  mounted() {
    this.downloadAudio();
  },
  watch: {
    '$route.params': function () {
      // Don't call downloadChapter when quitting the page
      if (this.id === '') return null;
      return this.downloadAudio();
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
