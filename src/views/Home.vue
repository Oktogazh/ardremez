<template>
  <SeriesCard :seriesDataPath="uri" />
</template>

<script>
// @ is an alias to /src
import SeriesCard from '@/components/home/SeriesCard.vue';

export default {
  name: 'Home',
  components: {
    SeriesCard,
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'Home' });
  },
  data() {
    return {
      uri: 'fakeURI',
    };
  },
};
</script>

<style media="screen">

</style>
