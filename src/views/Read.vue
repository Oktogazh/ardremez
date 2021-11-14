<template>
  <Reader :data="chapterData" />
</template>
<script>
import axios from 'axios';
import Reader from '@/components/read/Reader.vue';

export default {
  name: 'Read',
  created() {
    this.downloadChapter();
  },
  components: {
    Reader,
  },
  data() {
    return {
      loading: false,
      id: null,
      chapterData: {
        cards: [
          {
            type: null,
            data: {
              header: null,
              body: null,
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
    },
  },
};
</script>

<style scoped>
</style>
