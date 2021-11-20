<template>
  <Card>
    <template v-slot:header>
      <ResponsiveHeader :chapter="chapter" :selected="selected" @selecting="select" />
    </template>
    <template v-slot:body>
      {{ chapter.cards[selected].data.body }}
    </template>
  </Card>
</template>

<script>
import Card from '@/atoms/Card.vue';
import ResponsiveHeader from '@/molecules/ResponsiveHeader.vue';

export default {
  name: 'ReaderCard',
  components: {
    Card,
    ResponsiveHeader,
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    select(index) {
      this.selected = index;
    },
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
