<template>
  <Reader v-if="!loading" :chapter="chapterData" />
  <EmptyCard v-if="loading" :open="false">
    <template #header>
      <h1>Loading...</h1>
    </template>
  </EmptyCard>
</template>

<script>
import axios from 'axios';
import Reader from '@/components/read/Reader.vue';
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'Read',
  created() {
    this.downloadChapter();
  },
  components: {
    EmptyCard,
    Reader,
  },
  data() {
    return {
      loading: false,
      id: null,
      chapterData: { // :chapter
        cards: [ // :card
          {
            type: null,
            data: {
              header: null,
              body: [
                null,
                /* if (type === 'captions') ['html', startTimestamp, endTimestamp] */
                /* else 'html' */
              ],
            },
          },
        ],
        comeBack: null,
        images: [],
        links: [],
        // announcement: [],
      },
      error: null,
    };
  },
  methods: {
    async downloadChapter() {
      this.loading = true;
      this.id = this.$route.query.p;
      const dataURI = `${this.$store.state.api}/api/read/${this.id}`;

      const chapterData = await Promise.resolve()
        .then(() => axios.get(dataURI))
        .then((res) => res.data.chapter);
      this.chapterData = chapterData;
      this.loading = false;
    },
  },
  watch: {
    $route() {
      this.downloadChapter();
    },
  },
};
</script>

<style scoped>
</style>
