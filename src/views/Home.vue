<template>
  <MenuButton />
  <SeriesCard />
</template>

<script>
// @ is an alias to /src
import SeriesCard from '@/components/main/SeriesCard.vue';
import MenuButton from '@/components/main/MenuButton.vue';

export default {
  name: 'Home',
  components: {
    SeriesCard,
    MenuButton,
  },
};
</script>

<style media="screen">

</style>
