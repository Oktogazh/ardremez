<template>
  <Card>
    <template #header="{ toggle }"> <!-- <div class="header-container" @click=...> instead -->
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
  </Card>
</template>

<script>
import Card from '@/atoms/Card.vue';

export default {
  name: 'ChapterCard',
  components: {
    Card,
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
  font-size: 1.5em;
  font-weight: 600;
  cursor: pointer;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
