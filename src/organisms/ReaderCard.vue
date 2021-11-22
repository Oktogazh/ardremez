<template>
  <Card>
    <template v-slot:header="{ pad, }">
      <ResponsiveHeader :chapter="chapter" :selected="selected" @selecting="select" :pad="pad"/>
    </template>
    <template v-slot:body>
      <div id="body-inner-container">
        <ul v-if="chapter.cards[selected].type === 'captions'">
          <li v-for="(caption, index) in chapter.cards[selected].data.body"
            :key="index" v-html="caption[0]" @click="play(caption[1])">
          </li>
        </ul>
        <p v-else v-html="body"></p>
      </div>
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
  computed: {
    body() {
      return (this.chapter.cards[this.selected].type === 'html')
        ? (this.chapter.cards[this.selected].data.body.join('\n')) : this.chapter.cards[this.selected].data.body;
    },
  },
};
</script>

<style scoped>
#body-inner-container {
  padding: 1em 2em;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
