<template>
  <EmptyCard>
    <template #header="{ toggle }">
      <div id="card-title" v-html="card.data.header"  @click="toggle"></div>
    </template>
    <template #body>
      <ul v-if="card.type === 'captions'">
        <li v-for="(caption, index) in body"
          :key="index" v-html="caption[0]" @click="play(caption[1])">
        </li>
      </ul>
      <p v-else v-html="body"></p>
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
  computed: {
    body() {
      return (this.card.type === 'html')
        ? (this.card.data.body.join('\n')) : this.card.data.body;
    },
  },
  methods: {
    play(startTimestamp) {
      return startTimestamp;
    },
  },
  props: {
    card: {
      required: true,
    },
  },
};
</script>

<style scoped>
#card-title {
  margin: .5em 1em;
  font-size: 2em;
  font-weight: 600;
  cursor: pointer;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
