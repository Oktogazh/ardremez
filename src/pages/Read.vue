<template>
  <MainContainer>
    <ReaderCard v-if="!loading" :chapter="chapterData" :pad="'1em'" />
    <Card v-if="loading" :open="false">
        <h1>Loading...</h1>
    </Card>
  </MainContainer>
  <teleport to="#app">
    <Player />
  </teleport>
</template>

<script>
import { mapState } from 'vuex';
import MainContainer from '@/atoms/MainContainer.vue';
import ReaderCard from '@/organisms/ReaderCard.vue';
import Card from '@/atoms/Card.vue';
import Player from '@/organisms/Player.vue';

export default {
  name: 'Read',
  created() {
    this.downloadChapter();
  },
  components: {
    Card,
    MainContainer,
    ReaderCard,
    Player,
  },
  computed: {
    ...mapState({
      loading: (state) => state.app.loading,
    }),
  },
  data() {
    return {
      id: null,
      chapterData: { // :chapter
        backToChapter: null,
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
        images: [],
        links: null,
        openCardOnEnded: null,
        title: null,
      },
      error: null,
    };
  },
  methods: {
    async downloadChapter() {
      const { api } = this.$store.state;
      this.id = this.$route.query.p;

      if (!this.id) return null;
      this.$store.dispatch('app/updateAppState', { subtitle: '...', title: null, loading: true });
      const chapterAndSeriesId = this.id.split('@');
      const chapter = chapterAndSeriesId[0];
      const seriesId = `@${chapterAndSeriesId[1]}`;
      const progressObject = {
        chapter,
        seriesId,
      };
      this.$store.dispatch('user/updateProgress', progressObject);
      // in order to call it from here only once (both for new prog and old ones)
      const dataURI = `${api}/api/read/${this.id}`;

      const chapterData = await Promise.resolve()
        .then(() => window.axios.get(dataURI))
        .then((res) => res.data.chapter);
      this.$store.commit('chapter/SET_LESSON', chapterData);
      this.chapterData = chapterData;
      this.$store.dispatch('app/updateAppState', {
        subtitle: chapterData.title,
        title: null,
        loading: false,
      });

      return null;
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
