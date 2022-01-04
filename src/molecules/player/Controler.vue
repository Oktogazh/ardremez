<template >
  <div id="controler">
    <Load :active="hasPrev" :size="size" :angle="'90deg'" @click="loading('prev')"/>
    <Skip :size="size" :angle="'180deg'" @click="skipping(-10)"/>
    <PlayPause :size="size"
      @play="setPlaying(true)" @pause="setPlaying(false)"/>
    <Skip :size="size" @click="skipping(10)"/>
    <Load :active="hasNext" :size="size" :angle="'-90deg'" @click="loading('next')"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Load from '@/atoms/actions/Load.vue';
import Skip from '@/atoms/actions/Skip.vue';
import PlayPause from '@/atoms/actions/PlayPause.vue';

export default {
  name: 'Controler',
  components: {
    Load,
    PlayPause,
    Skip,
  },
  computed: {
    ...mapState({
      playing: (state) => state.app.player.playing,
      progress: (state) => state.user.progress,
      translate: (state) => state.lang,
    }),
    hasNext() {
      const id = parseInt(this.$store.state.chapter.id, 10);
      const max = parseInt(this.$store.state.series.series[0].length, 10);
      return (max !== id);
    },
    hasPrev() {
      const id = parseInt(this.$store.state.chapter.id, 10);
      return (id !== 1);
    },
  },
  data() {
    return {
      size: '37px',
    };
  },
  methods: {
    exists(chapter, length) {
      // first checks if the chapter exists
      if (chapter < 1 || chapter > length) return false;
      return true;
    },
    loading(name) {
      const { _id, length } = this.$store.state.series.series[0];
      const sign = (name === 'prev') ? -1 : 1;
      const filter = (obj) => (obj.seriesId === _id);
      // if same user progressed on an other client, syncronizing here
      const currentProgress = Number(this.progress.filter(filter)[0].chapter);
      const askingFor = sign * 1 + currentProgress;

      const exists = this.exists(askingFor, length);
      if (exists !== true) return null;

      if (this.playing) {
        const playIcon = document.getElementById('play-icon');
        playIcon.click();
      }

      return this.$router.push({ path: `/read/${askingFor}${_id}` });
    },
    setPlaying(bool) {
      this.$store.dispatch('app/updateAppState', { player: { playing: bool } });
    },
    skipping(secs) {
      const audio = document.getElementById('audio');
      audio.currentTime += secs;
    },
  },
};
</script>

<style scoped>
#controler {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

@media only screen and (max-width: 650px) {
  #controler {
    margin: auto;
  }
}
</style>
