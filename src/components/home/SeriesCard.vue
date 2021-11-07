<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <p v-for="(paragraph, index) in comments" :key="index">
        {{ paragraph }}
      </p>
    </template>
  </EmptyCard>
</template>

<script>
import { mapState } from 'vuex';
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'SeriesCard',
  components: {
    EmptyCard,
  },
  computed: {
    ...mapState({
      title: (state) => state.series.title,
      comments: (state) => state.series.comments,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
  },
  props: {

  },
};
</script>

<style scoped>
</style>
