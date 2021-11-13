<template>
  <ChapterCard v-for="{ card, index } in data.cards" :key="index" :cardData="card" />
</template>

<script>
import ChapterCard from '@/components/read/ChapterCard.vue';

export default {
  name: 'Reader',
  mounted() {
    console.log('data equals:', this.data);
  },
  components: {
    ChapterCard,
  },
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
