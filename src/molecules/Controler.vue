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
      subscriptions: (state) => state.user.subscriptions,
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
    authorize(chapter, seriesId) {
      const { length } = this.$store.state.series.series[0];
      const { freeTrial } = this.$store.state.series.series[0];
      if (chapter < 1 || chapter > length) return false;
      const prodId = `prod_${seriesId.substring('@'.length)}`;
      const finder = (progObj) => {
        const active = (progObj.status === 'active' || progObj.status === 'past_due');
        return (progObj.productId === prodId && active);
      };
      const subscribed = (this.subscriptions.findIndex(finder) !== -1);
      const authorized = (chapter <= freeTrial || subscribed);
      return authorized;
    },
    loading(name) {
      const { _id } = this.$store.state.series.series[0];
      const sign = (name === 'prev') ? -1 : 1;
      const id = parseInt(this.$store.state.chapter.id, 10);
      const askingFor = sign * 1 + id;

      const authorized = this.authorize(askingFor, _id);
      if (!authorized) return null;

      if (this.playing) {
        const playIcon = document.getElementById('play-icon');
        playIcon.click();
      }

      return this.$router.push({
        path: '/read',
        query: {
          p: `${askingFor}${_id}`,
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
