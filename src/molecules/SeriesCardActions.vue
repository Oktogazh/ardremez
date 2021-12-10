<template>
  <div id="series-actions-container">
    <!-- TODO: use a getter to compute the query after the user's level -->
    <router-link :to="{ path: '/read', query: { p: `1${seriesObject.code}` }}">
      <SmallButton :bg="'grad-blue'" :text="translate.Free_Trial"/>
    </router-link>
    <SmallButton v-if="!subscriptionId" :bg="'grad-green'" @click="beforeSubscribe"
    :text="translate.Subscribe"/>
    <SmallButton v-if="subscriptionId" :bg="'grad-red'" @click="beforeUnSubscibe"
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
    subscriptionId() {
      const { _id } = this.seriesObject;
      function filter(sub) {
        const { status, productId } = sub;
        return ((productId === _id) && (status === 'active' || status === 'past_due'));
      }
      const filtered = this.user.subscriptions.filter(filter)[0] || {};
      const { id } = filtered;

      return id;
    },
    ...mapState({
      translate: (state) => state.lang,
      user: (state) => state.user,
      api: (state) => state.api,
    }),
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
    beforeUnSubscibe() {
      const store = this.$store;
      window.axios.delete(`${this.api}/api/digoumanantiñ/${this.subscriptionId}`)
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
