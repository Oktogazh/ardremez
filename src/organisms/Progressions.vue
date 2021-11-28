<template>
  <h2 v-html="translate.Progressions"></h2>
  <SeriesCard v-for="({ title, comments, code, images, metadata }, key) in storedSeries"
    :open="false" :title="title" :code="code" :comments="comments"
    :images="images" :metadata="metadata" :key="key" />
</template>

<script>
import { mapState } from 'vuex';
import SeriesCard from '@/molecules/SeriesCard.vue';

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
