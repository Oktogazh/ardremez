<template>
  <EmptyCard>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <div v-if="images" id="img-outer-container">
        <div class="img-outer-container"
          v-for="(img, index) in images" :key="index">
          <img :src="img.path" class="series-images" @click="fullSizeModal(img.path)">
        </div>
        <Modal v-if="imgModal != null" @closing="fullSizeModal(null)">
          <img :src="imgModal" id="fullSize">
        </Modal>
      </div>
      <p>{{ imgModal }}</p>
      <p v-for="(paragraph, index) in comments" :key="index">
        {{ paragraph }}
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
  data() {
    return {
      imgModal: null,
    };
  },
  methods: {
    fullSizeModal(path) {
      this.imgModal = path;
    },
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
  max-width: 80%;
  max-height: 80%;
}
</style>
