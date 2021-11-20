<template>
  <ReaderCard :chapter="chapter" />
  <div  v-if="false">
    <ChapterCard v-for="(card, index) in chapter.cards" :key="index" :card="card" />
  </div>
</template>

<script>
import ChapterCard from '@/organisms/read/ChapterCard.vue';
import ReaderCard from '@/molecules/ReaderCard.vue';

export default {
  name: 'Reader',
  components: {
    ChapterCard,
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
