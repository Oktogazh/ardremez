<template>
  <Reader>
  </Reader>
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
        cards: [],
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
      const { jwt } = this.$store.state.user;
      const dataURI = `${this.$store.state.api}/api/lenn/${this.id}`;

      const chapterData = await Promise.resolve()
        .then(() => {
          if (jwt) {
            axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
          }
        })
        .then(() => axios.get(dataURI))
        .then((res) => res.data.kentel);
      this.chapterData = chapterData;
    },
  },
};
</script>

<style scoped>
</style>
