<template>
  <ReaderCard :chapter="chapter" />
</template>

<script>
import ReaderCard from '@/molecules/ReaderCard.vue';

export default {
  name: 'Reader',
  components: {
    ReaderCard,
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
