<template>
  <Reader v-if="!loading" :chapter="chapterData" />
  <Card v-if="loading" :open="false">
    <template #header>
      <h1>Loading...</h1>
    </template>
  </Card>
  <teleport to="#app">
    <Player />
  </teleport>
</template>

<script>
import axios from 'axios';
import Reader from '@/components/Reader.vue';
import Card from '@/atoms/Card.vue';
import Player from '@/components/Player.vue';

export default {
  name: 'Read',
  created() {
    this.downloadChapter();
  },
  components: {
    Card,
    Reader,
    Player,
  },
  data() {
    return {
      loading: false,
      id: null,
      chapterData: { // :chapter
        cards: [ // :card
          {
            type: null,
            data: {
              header: null,
              body: [
                null,
                /* if (type === 'captions') ['html', startTimestamp, endTimestamp] */
                /* else 'html' */
              ],
            },
          },
        ],
        comeBack: null,
        images: [],
        links: [],
        // announcement: [],
      },
      error: null,
    };
  },
  methods: {
    async downloadChapter() {
      this.loading = true;
      this.$store.commit('app/SET_TITLES', { subtitle: 'Loading...' });
      this.id = this.$route.query.p;
      const dataURI = `${this.$store.state.api}/api/read/${this.id}`;

      const chapterData = await Promise.resolve()
        .then(() => axios.get(dataURI))
        .then((res) => res.data.chapter);
      this.chapterData = chapterData;
      this.$store.commit('app/SET_TITLES', { subtitle: chapterData.title });
      this.loading = false;
    },
  },
  watch: {
    $route() {
      this.downloadChapter();
    },
  },
};
</script>

<style scoped>
</style>
