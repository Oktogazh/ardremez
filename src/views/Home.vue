<template>
  <SeriesCard v-for="({ title, comments, code, images, metadata }, key) in storedSeries"
    :title="title" :code="code" :comments="comments"
    :images="images" :metadata="metadata" :key="key" />
</template>

<script>
import { mapState } from 'vuex';
import SeriesCard from '@/molecules/SeriesCard.vue';

export default {
  name: 'Home',
  components: {
    SeriesCard,
  },
  computed: {
    ...mapState({
      storedSeries: (state) => state.series.series,
    }),
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'Home' });
  },
  data() {
    return {
    };
  },
};
</script>

<style media="screen">

</style>
