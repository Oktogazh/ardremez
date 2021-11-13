<template>
  <EmptyCard>
    <template #header="/*{ toggle, bodyOpen }*/">
    </template>
    <template #body>
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'ChapterCard',
  component: {
    EmptyCard,
  },
  props: {
    cardData: {
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
