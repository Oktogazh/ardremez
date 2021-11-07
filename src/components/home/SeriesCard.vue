<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <div v-if="images" id="img-container">
        <div v-for="(img, index) in images" :key="index">
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
#img-container {
  height: 10em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
}

.series-images {
  width: 25%; /* TODO: fix the CSS */
}
</style>
