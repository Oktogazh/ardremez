<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      {{ comment }}
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
      comment: (state) => state.series.comment,
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
