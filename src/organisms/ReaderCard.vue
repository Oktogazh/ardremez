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
        </div>
        <button v-if="back.chapter !== null" @click="loading(back.chapter)">
          <i v-html="back.html"></i>
        </button>
        <LinksBox v-if="links.title !== null" :links="links" />
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import HeadedCard from '@/molecules/HeadedCard.vue';
import ResponsiveHeader from '@/molecules/ResponsiveHeader.vue';
import LinksBox from '@/molecules/LinksBox.vue';

export default {
  name: 'ReaderCard',
  components: {
    HeadedCard,
    LinksBox,
    ResponsiveHeader,
  },
  computed: {
    back() {
      return this.chapter.backToChapter;
    },
    links() {
      return this.chapter.links;
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
    loading(next) {
      const { _id } = this.$store.state.series.series[0];
      return this.$router.push({
        path: '/read',
        query: {
          p: `${next}${_id}`,
        },
      });
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
