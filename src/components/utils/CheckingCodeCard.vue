<template>
  <EmptyCard :togglable="false">
    <template v-slot:title>
      titl
    </template>
    <template  v-slot:body>
      body
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'CheckingCodeCard',
  components: {
    EmptyCard,
  },
};
</script>

<style scoped>
</style>
