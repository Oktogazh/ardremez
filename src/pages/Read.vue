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
import axios from 'axios';
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
      const { api } = this.$store.state;
      this.$store.commit('app/SET_LOADING', { loading: true });
      this.$store.commit('app/SET_TITLES', { subtitle: 'Loading...' });
      this.id = this.$route.query.p;

      if (!this.id) return null;

      const dataURI = `${api}/api/read/${this.id}`;

      const chapterData = await Promise.resolve()
        .then(() => axios.get(dataURI))
        .then((res) => res.data.chapter);
      this.$store.commit('lesson/SET_LESSON', chapterData);
      this.chapterData = chapterData;
      this.$store.commit('app/SET_TITLES', { subtitle: chapterData.title });

      this.$store.commit('app/SET_LOADING', { loading: false });
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
