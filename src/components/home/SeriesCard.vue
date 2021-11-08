<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <div v-if="images" id="img-outer-container">
        <div class="img-outer-container"
          v-for="(img, index) in images" :key="index">
          <img :src="img.path" class="series-images">
        </div>
      </div>
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
      images: (state) => state.series.images,
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
#img-outer-container {
  max-width: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(89, 89, 89);
  overflow-x: auto;
  padding: 1.5em;
  gap: 1.5em;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin: 1em 3em;
}
#img-outer-container:-webkit-scrollbar {
    display: none; /* Other browser */
}

.series-images {
  vertical-align: middle;
  height: 8em;
}
</style>
