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
      playing(state) {
        return state.app.player.playing;
      },
    }),
    hasNext() {
      const id = parseInt(this.$store.state.lesson.id, 10);
      const max = parseInt(this.$store.state.series.series[0].metadata.podcasts, 10);
      return (max !== id);
    },
    hasPrev() {
      const id = parseInt(this.$store.state.lesson.id, 10);
      return (id !== 1);
    },
  },
  data() {
    return {
      size: '37px',
    };
  },
  methods: {
    loading(name) {
      const { code } = this.$store.state.series.series[0];
      const sign = (name === 'prev') ? -1 : 1;
      const max = this.$store.state.series.series[0].metadata.podcasts;
      // const freeTrial = this.$store.state.series.series[0].metadata.freeTrial;
      const id = parseInt(this.$store.state.lesson.id, 10);
      const askingFor = sign * 1 + id;

      if (askingFor < 1 || askingFor > max) return null;

      if (this.playing) {
        const playIcon = document.getElementById('play-icon');
        playIcon.click();
      }

      return this.$router.push({
        path: '/read',
        query: {
          p: `${askingFor}${code}`,
        },
      });
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
