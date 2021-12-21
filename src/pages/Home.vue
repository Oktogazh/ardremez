<template>
  <MainContainer>
    <SeriesCard v-for="(seriesObject, key) in storedSeries"
      :seriesObject="seriesObject" :key="key" />
  </MainContainer>
</template>

<script>
import { mapState } from 'vuex';
import SeriesCard from '@/organisms/SeriesCard.vue';
import MainContainer from '@/atoms/MainContainer.vue';

export default {
  name: 'Home',
  components: {
    SeriesCard,
    MainContainer,
  },
  computed: {
    ...mapState({
      storedSeries: (state) => state.series.series,
    }),
  },
  created() {
    this.$store.dispatch('app/updateAppState', { title: 'Home', subtitle: null });
  },
  data() {
    return {
    };
  },
};
</script>

<style media="screen">

</style>
