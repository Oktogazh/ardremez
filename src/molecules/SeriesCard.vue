<template>
  <HeadedCard :radius="'9px'" :open="open">
    <!-- @click="toggle" -->
    <template #header="{ toggle, bodyOpen }">
      <DownButton v-if="!bodyOpen" @click="toggle"/>
      <UpButton v-if="bodyOpen" @click="toggle"/>
      <div id="title-flex">
        <!-- Image Viewer -->
        <div v-if="seriesObject.images" id="img-outer-container" @click.stop>
          <div id="img-inner-container"
            v-for="(img, index) in seriesObject.images" :key="index">
            <img :src="img.path" class="series-images" @click="clickedImg(img)">
          </div>
          <Modal v-if="path" @closing="clickedImg({ path: null, legend: null })">
            <figure>
              <img :src="path" id="fullSize">
              <figcaption v-if="legend" v-html="legend"></figcaption>
            </figure>
          </Modal>
        <!-- Image Viewer End -->
        </div>
        <!-- Title & Metadata -->
        <div id="title-and-metadata">
          <h2 id="series-title" v-html="seriesObject.title"></h2>
          <div id="metadata-container">
            <p class="metadata">{{ `${seriesObject.metadata.podcasts} ` + translate.podcasts }}</p>
            <p class="metadata">{{
              `${translate.average_duration} ` + seriesObject.metadata.averageDuration }}</p>
            <p class="metadata">{{
              `${translate[languages.source]} → ${translate[languages.target]}`
            }}</p>
          </div>
          <SeriesCardActions :seriesObject="seriesObject" />
        <!-- Title & Metadata End -->
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div id="body-container">
        <div class="">
          <p v-for="(paragraph, index) in seriesObject.comments" :key="index" v-html="paragraph">
          </p>
        </div>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import HeadedCard from '@/molecules/HeadedCard.vue';
import SeriesCardActions from '@/molecules/SeriesCardActions.vue';
import Modal from '@/atoms/Modal.vue';
import DownButton from '@/atoms/buttons/DownButton.vue';
import UpButton from '@/atoms/buttons/UpButton.vue';

export default {
  name: 'SeriesCard',
  components: {
    HeadedCard,
    Modal,
    SeriesCardActions,
    DownButton,
    UpButton,
  },
  computed: {
    languages() {
      return this.seriesObject.metadata.languages;
    },
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  created() {
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
    open: {
      required: false,
      default: true,
    },
    seriesObject: {
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

#title-and-metadata {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  max-height: 10em;
}

#series-title {
  width: stretch;
}

#metadata-container {
  display: flex;
}

.metadata {
  width: max-content;
  padding: 0 2em;
  font-size: 11px;
  color: var(--dark-black);
  text-transform: uppercase;
  font-weight: 800;
  font-variant-caps: all-petite-caps;
}

.option {
  width: max-content;
  padding: 0 2em;
  font-size: 11px;
  color: var(--lighter-white);
  text-transform: uppercase;
  font-weight: 800;
  font-variant-caps: all-petite-caps;
  border-radius: 1em;
  padding: 3px 6px;
  cursor: pointer;
  opacity: .7;
  margin: 0 3em;
}
.option:hover {
  opacity: .9;
}

#toggle-btn {
  background: var(--dark-black);
}
#toggle-btn:hover {
  box-shadow: var(--slim-box-shadow)  var(--dark-black);
}

#body-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

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

#img-inner-container {
}

.series-images {
  vertical-align: middle;
  height: 10em;
  width: 10em;
  object-fit: cover;
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
