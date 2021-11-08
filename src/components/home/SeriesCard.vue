<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <div v-if="images" id="img-outer-container">
        <div class="img-outer-container"
          v-for="(img, index) in images" :key="index">
          <img :src="img.path" class="series-images" @click="fullSizeModal(img)">
        </div>
        <Modal v-if="path" @closing="fullSizeModal({ path: null, legend: null })">
          <figure>
            <img :src="path" id="fullSize">
            <figcaption v-if="legend" v-html="legend"></figcaption>
          </figure>
        </Modal>
      </div>
      <p v-for="(paragraph, index) in comments" :key="index" v-html="paragraph">
      </p>
    </template>
  </EmptyCard>
</template>

<script>
import { mapState } from 'vuex';
import EmptyCard from '@/components/utils/card/EmptyCard.vue';
import Modal from '@/components/utils/Modal.vue';

export default {
  name: 'SeriesCard',
  components: {
    EmptyCard,
    Modal,
  },
  computed: {
    ...mapState({
      title: (state) => state.series.title,
      comments: (state) => state.series.comments,
      images: (state) => state.series.images,
    }),
  },
  created() {
    const dataPath = this.seriesDataPath;
    console.log(dataPath); // TODO: make a fake api request
  },
  data() {
    return {
      path: null,
      legend: null,
    };
  },
  methods: {
    fullSizeModal({ path, legend }) {
      this.path = path;
      this.legend = legend;
    },
  },
  props: {
    seriesDataPath: {
      required: true,
    },
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
  padding: 1.5em 2em;
  gap: 1.5em;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin: 1em 3em;
  border-radius: 5px;
}
#img-outer-container:-webkit-scrollbar {
    display: none; /* Other browser */
}

.series-images {
  vertical-align: middle;
  height: 8em;
  border-radius: 1em;
  cursor: pointer;
}

#fullSize {
  max-width: 70vw;
  max-height: 70vh;
  vertical-align: middle;
}

figcaption {
  background-color: rgb(255, 255, 255);
  padding: .5em;
}
</style>
