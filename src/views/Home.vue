<template>
  <MenuButton />
  <Card />
</template>

<script>
// @ is an alias to /src
import Card from '@/components/main/Card.vue';
import MenuButton from '@/components/main/MenuButton.vue';

export default {
  name: 'Home',
  components: {
    Card,
    MenuButton,
  },
};
</script>

<style media="screen">

</style>
