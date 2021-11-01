<template>
  <SeriesCard />
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
};
</script>

<style media="screen">

</style>
