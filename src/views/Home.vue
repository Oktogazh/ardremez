<template>
  <Connexion />
  <Card />
</template>

<script>
// @ is an alias to /src
import Connexion from '@/components/main/Connexion.vue';
import Card from '@/components/main/Card.vue';

export default {
  name: 'Home',
  components: {
    Connexion,
    Card,
  },
};
</script>

<style media="screen">

</style>
