<template>
  <EmptyCard>
    <template v-slot:title>
      <div id="title-flex">
        <!-- Image Viewer -->
        <div v-if="images" id="img-outer-container" @click.stop>
          <div id="img-inner-container"
          v-for="(img, index) in images" :key="index">
          <img :src="img.path" class="series-images" @click="clickedImg(img)">
        </div>
        <Modal v-if="path" @closing="clickedImg({ path: null, legend: null })">
          <figure>
            <img :src="path" id="fullSize">
            <figcaption v-if="legend" v-html="legend"></figcaption>
          </figure>
        </Modal>
      </div>
      <!-- Title & Metadata -->
      <div class="">
        <h2 v-html="title"></h2>

      </div>
    </div>
    </template>
    <template v-slot:before>
    </template>
    <template v-slot:body>
      <div id="body-container">
        <div class="">
          <p v-for="(paragraph, index) in comments" :key="index" v-html="paragraph">
          </p>
        </div>
      </div>
    </template>
    <template v-slot:after>
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
    clickedImg({ path, legend, link }) {
      if (link) window.open(link, '_blank');
      else {
        this.path = path;
        this.legend = legend;
      }
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
#title-flex {
  display: flex;
  gap: 1em;
}

#body-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

#img-outer-container {
  max-width: 25%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 1.5em;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#img-outer-container::-webkit-scrollbar {
    display: none; /* Other browsers */
}

#img-inner-container {
}

.series-images {
  vertical-align: middle;
  max-width: 100%;
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
