<template>
  <div id="img-inner-container" v-for="(img, index) in images" :key="index">
    <img :src="img.path" class="series-images" @click="clickedImg(img)">
  </div>
  <Modal v-if="path" @closing="clickedImg({ path: null, legend: null })">
    <div id="fullSize">
      <img :src="path" id="fullSize-img">
      <span v-if="legend" v-html="legend"></span>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/atoms/Modal.vue';

export default {
  name: 'ImageViewer',
  components: {
    Modal,
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
    images: {
      required: false,
      type: Array,
    },
  },
};
</script>

<style scoped>
#img-outer-container {
  max-width: 10em;
  height: 10em;
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

.series-images {
  vertical-align: middle;
  height: 10em;
  width: 10em;
  object-fit: cover;
  cursor: pointer;
}

#fullSize-img {
  display: flex;
  flex-flow: column;
  align-self: stretch;
}

#fullSize-img {
  max-width: 70vw;
  max-height: 70vh;
  vertical-align: middle;
}

span {
  display: block;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
</style>
