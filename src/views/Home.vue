<template>
  <Header />
  <SeriesCard />
  <div class="player">

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue';
import SeriesCard from '@/components/main/SeriesCard.vue';

export default {
  name: 'Home',
  components: {
    Header,
    SeriesCard,
  },
};
</script>

<style media="screen">

</style>
