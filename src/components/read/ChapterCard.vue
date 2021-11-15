<template>
  <EmptyCard>
    <template #header="/*{ toggle, bodyOpen }*/">
      <h2 v-html="card.data.header"></h2>
    </template>
    <template #body>
      <pre>{{ card.data.body }}</pre>
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'ChapterCard',
  components: {
    EmptyCard,
  },
  props: {
    card: {
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
