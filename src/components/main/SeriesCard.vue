<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      {{ body }}
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'SeriesCard',
  components: {
    EmptyCard,
  },
  data() {
    return {
      title: 'Setu an titl',
      body: 'Lorem ipsum',
    };
  },
  methods: {
  },
};
</script>

<style lang="css" scoped>
</style>
