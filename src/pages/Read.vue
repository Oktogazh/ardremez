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
import { mapGetters, mapState } from 'vuex';
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
    id() {
      const { chapterId } = this.$route.params;
      return chapterId || '';
    },
    productId() {
      const { id } = this;
      const productId = `prod_${id.split('@')[1]}`;
      return productId;
    },
    ...mapGetters({
      connected: 'user/connected',
    }),
    ...mapState({
      api: (state) => state.api,
      hasJWT: (state) => {
        const { jwt } = state.user;
        return (jwt !== null);
      },
      loading: (state) => state.app.loading,
      series: (state) => state.series.series[0],
      freeTrial: (state) => state.series.series[0].freeTrial,
      subscriptions: (state) => state.user.subscriptions,
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
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
    authorize() {
      const {
        chapter,
        freeTrial,
      } = this;
      // checks if the user has an active subscription
      const subscribed = this.subscribed();
      const authorized = (chapter <= freeTrial || subscribed);

      return authorized;
    },
    async downloadChapter() {
      this.$store.dispatch('app/updateAppState', { subtitle: '...', title: null, loading: true });
      const { id } = this;
      const chapterAndSeriesId = id.split('@');
      this.chapter = Number(chapterAndSeriesId[0]);
      this.seriesId = `@${chapterAndSeriesId[1]}`;
      const {
        api,
        chapter,
        connected,
        freeTrial,
        productId,
        seriesId,
        $router,
        $store,
      } = this;

      const needsToSubscribe = (chapter !== this.redirect());
      if (needsToSubscribe) {
        const { path } = $router.currentRoute.value;
        const endOfFreeTrial = `/read/${freeTrial}${seriesId}`;
        const next = {
          path: endOfFreeTrial,
          query: {
            product_id: productId,
          },
        };
        if (!connected) {
          const params = {
            logging: true,
            next,
            redirect: {
              path: endOfFreeTrial,
            },
          };
          return $store.dispatch('app/logStatusAndRoute', params);
        }
        const params = {
          logging: false,
          next: path,
          redirect: endOfFreeTrial,
        };
        $store.dispatch('app/logStatusAndRoute', params);
        $router.push(next);
        return null;
      }

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
    redirect() {
      const {
        chapter,
        connected,
        freeTrial,
        subscribed,
      } = this;
      const authorized = (chapter <= freeTrial || subscribed());
      if (!authorized) {
        if (connected) {
          window.swal.fire({
            icon: 'warning',
            text: this.translate.YouNeedToSubToContinue,
          });
        }
        return freeTrial;
      }
      return chapter;
    },
    subscribed() {
      const prodId = `prod_${this.seriesId.substring('@'.length)}`;
      const filter = (progObj) => {
        const active = (progObj.status === 'active' || progObj.status === 'past_due');
        return (progObj.productId === prodId && active);
      };

      return (this.subscriptions.findIndex(filter) !== -1);
    },
  },
  watch: {
    '$route.params': function () {
      // Don't call downloadChapter when quitting the page
      if (this.id === '') return null;
      return this.downloadChapter();
    },
  },
};
</script>

<style scoped>
</style>
