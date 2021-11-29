<template>
  <div id="series-actions-container">
    <!-- TODO: use a getter to compute the query after the user's level -->
    <router-link :to="{ path: '/read', query: { p: `1${seriesCode}` }}">
      <SmallButton :bg="'grad-blue'" :text="translate.Free_Trial"/>
    </router-link>
    <SmallButton :bg="'grad-green'" @click="beforeSubscribe" :text="translate.Subscribe"/>
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
    }),
  },
  methods: {
    async beforeSubscribe() {
      const next = {
        path: '/dashboard',
        query: { s: `${this.seriesCode}` },
      };
      const alreadyLogged = await this.$store.dispatch('app/logAndRoute', next);
      if (alreadyLogged) this.$router.push(next);
    },
  },
  props: {
    seriesCode: {
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
