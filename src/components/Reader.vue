<template>
  <ChapterCard v-for="(card, index) in chapter.cards" :key="index" :card="card" />
</template>

<script>
import ChapterCard from '@/components/read/ChapterCard.vue';

export default {
  name: 'Reader',
  components: {
    ChapterCard,
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
