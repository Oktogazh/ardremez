<template>
  <Card>
    <template v-slot:header>
      <ResponsiveHeader :chapter="chapter" />
    </template>
    <template v-slot:body>
    </template>
  </Card>
</template>

<script>
import Card from '@/atoms/Card.vue';
import ResponsiveHeader from '@/molecules/ResponsiveHeader.vue';

export default {
  name: 'ReaderCard',
  components: {
    Card,
    ResponsiveHeader,
  },
  props: {
    chapter: {
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
