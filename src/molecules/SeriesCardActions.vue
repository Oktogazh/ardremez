<template>
  <div id="series-actions-container">
    <!-- TODO: use a getter to compute the query after the user's level -->
    <router-link :to="{ path: '/read', query: { p: `${progress.chapter}${seriesObject._id}` }}">
      <SmallButton :bg="'grad-blue'" :text="translate[progress.txt]"/>
    </router-link>
    <SmallButton v-if="sub.status === 'notSub'" :bg="'grad-green'" @click="beforeSubscribe"
    :text="translate.Subscribe"/>
    <SmallButton v-if="sub.id !== false" :bg="'grad-red'" @click="beforeUnsubscibe"
      :text="translate.Unsubscribe"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SmallButton from '@/atoms/buttons/SmallButton.vue';

export default {
  name: 'SeriesCardActions',
  components: {
    SmallButton,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
      user: (state) => state.user,
      api: (state) => state.api,
    }),
    progress() {
      const underscoreId = '_id';
      const id = this.seriesObject[underscoreId];
      const { freeTrial } = this.seriesObject;
      function filter(prog) {
        const { seriesId } = prog;
        return (seriesId === id);
      }
      const { sub } = this;
      const filtered = this.user.progress.filter(filter);
      const progress = (filtered.length === 0) ? false : filtered[0].chapter;
      if (!sub.id && !progress) {
        return {
          txt: 'Free_Trial',
          chapter: 1,
        };
      } if (!sub.id && progress) {
        return {
          txt: 'Continue',
          chapter: (progress > freeTrial) ? freeTrial : progress,
        };
      }

      return {
        txt: (progress === 0) ? 'Start' : 'Continue',
        chapter: (progress === 0) ? 1 : progress,
      };
    },
    sub() {
      const seriesProdId = this.seriesObject.productId;
      function filter(sub) {
        const { status, productId } = sub;
        return ((productId === seriesProdId) && (status === 'active' || status === 'past_due'));
      }
      const filtered = this.user.subscriptions.filter(filter);
      const sub = {
        // if there is no subscription id yet,
        // e.i. just after a payment validation before sync with the DB
        // or if `filtered[0]` is  undefined
        // `id` is set to false, so the unsubscribe btn won't appear
        id: false,
        status: 'notSub', // if it becomes not `notSub`, status is active or past due
        ...filtered[0],
      };

      return sub;
    },
  },
  methods: {
    beforeSubscribe() {
      const next = {
        path: '/dashboard',
      };
      const here = this.$router.currentRoute.value.path;
      this.$store.dispatch('payment/startCheckout', { product: this.seriesObject });
      this.$store.dispatch('app/logAndRoute', { next, redirect: here });
    },
    beforeUnsubscibe() {
      const store = this.$store;
      window.axios.delete(`${this.api}/api/digoumanantiñ/${this.sub.id}`)
        .then((res) => store.commit('user/SET_USER_DATA', res.data));
    },
  },
  props: {
    seriesObject: {
      required: true,
    },
  },
};
</script>

<style scoped>
#series-actions-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

</style>
