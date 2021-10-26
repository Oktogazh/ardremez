<template>
  <Portal />
  <MenuButton />
  <Card />
</template>

<script>
// @ is an alias to /src
import Portal from '@/components/auth/Portal.vue';
import Card from '@/components/main/Card.vue';
import MenuButton from '@/components/main/MenuButton.vue';

export default {
  name: 'Home',
  components: {
    Portal,
    Card,
    MenuButton,
  },
};
</script>

<style media="screen">

</style>
