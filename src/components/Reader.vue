<template>
  <div id="reader-container">
    <ChapterCard v-for="(card, index) in chapter.cards" :key="index" :card="card" />
  </div>
  <div  v-if="false">
    <ChapterCard v-for="(card, index) in chapter.cards" :key="index" :card="card" />
  </div>
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
#reader-container {
  border: solid 1px black;
}
</style>
