<template>
  <HeadedCard :extend="true">
    <template v-slot:header="{ pad, }">
      <ResponsiveHeader :chapter="chapter" :selected="selected" @selecting="select" :pad="pad"/>
    </template>
    <template v-slot:body>
      <div id="body-inner-container">
        <ul v-if="chapter.cards[selected].type === 'captions'">
          <li v-for="(caption, index) in chapter.cards[selected].data.body"
            :key="index" v-html="caption[0]" @click="play(caption[1])">
          </li>
        </ul>
        <div v-else>
          <p v-html="body"></p>
          <p v-if="back.chapter === null" v-html="back.html" @click="loading"></p>
        </div>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import HeadedCard from '@/molecules/HeadedCard.vue';
import ResponsiveHeader from '@/molecules/ResponsiveHeader.vue';

export default {
  name: 'ReaderCard',
  components: {
    HeadedCard,
    ResponsiveHeader,
  },
  computed: {
    back() {
      return this.backToChapter;
    },
    body() {
      return (this.chapter.cards[this.selected].type === 'html')
        ? (this.chapter.cards[this.selected].data.body.join('\n'))
        : this.chapter.cards[this.selected].data.body;
    },
    ...mapState({
      playing: (state) => state.app.player.playing,
    }),
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    loading() {
      const { _id } = this.$store.state.series.series[0];
      return _id;
    },
    play(startTime) {
      const audio = document.getElementById('audio');

      audio.currentTime = startTime;

      if (!this.playing) {
        const playIcon = document.getElementById('play-icon');
        playIcon.click();
      }
    },
    select(index) {
      this.selected = index;
    },
  },
  props: {
    chapter: {
      required: true,
    },
  },
};
</script>

<style scoped>
#body-inner-container {
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
