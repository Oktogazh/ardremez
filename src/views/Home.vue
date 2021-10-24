<template>
  <Portal />
  <Card />
</template>

<script>
// @ is an alias to /src
import Portal from '@/components/auth/Portal.vue';
import Card from '@/components/main/Card.vue';

export default {
  name: 'Home',
  components: {
    Portal,
    Card,
  },
};
</script>

<style media="screen">

</style>
