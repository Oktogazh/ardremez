<template>
  <h2 v-html="translate.Progressions"></h2>
  <SeriesCard v-for="(seriesObject, key) in storedSeries"
    :open="false" :seriesObject="seriesObject" :key="key" />
</template>

<script>
import { mapState } from 'vuex';
import SeriesCard from '@/organisms/SeriesCard.vue';

export default {
  name: 'Progressions',
  components: {
    SeriesCard,
  },
  computed: {
    ...mapState({
      storedSeries: (state) => state.series.series, // TODO: change to match users' level
      translate: (state) => state.lang,
    }),
  },
};
</script>

<style scoped>
</style>
