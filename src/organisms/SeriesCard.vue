<template>
  <HeadedCard :radius="'9px'" :open="open">
    <!-- @click="toggle" -->
    <template #header="{ toggle, bodyOpen }">
      <DownButton v-if="!bodyOpen" @click="toggle"/>
      <UpButton v-if="bodyOpen" @click="toggle"/>
      <div id="title-flex">
        <!-- Image Viewer -->
        <ImageViewer :images="seriesObject.images" />
        <!-- Title & Metadata -->
        <div id="title-and-metadata">
          <h2 id="series-title" v-html="seriesObject.title"></h2>
          <SeriesMetadata :seriesObject="seriesObject" />
          <SeriesCardActions :seriesObject="seriesObject" />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div id="body-container">
        <p v-for="(paragraph, index) in seriesObject.description" :key="index" v-html="paragraph">
        </p>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import HeadedCard from '@/molecules/HeadedCard.vue';
import SeriesCardActions from '@/molecules/seriesCard/SeriesCardActions.vue';
import SeriesMetadata from '@/molecules/seriesCard/SeriesMetadata.vue';
import ImageViewer from '@/molecules/seriesCard/ImageViewer.vue';
import DownButton from '@/atoms/buttons/DownButton.vue';
import UpButton from '@/atoms/buttons/UpButton.vue';

export default {
  name: 'SeriesCard',
  components: {
    DownButton,
    HeadedCard,
    ImageViewer,
    SeriesCardActions,
    SeriesMetadata,
    UpButton,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
    metadataBox() {
      const {
        seriesObject,
        translate,
      } = this;

      const averageDuration = `${translate.average_duration} ${seriesObject.averageDuration}`;
      // const direction = `${translate[languages.source]} → ${translate[languages.target]}`;
      const numberOfLessons = `${seriesObject.length} ${translate.lessons}`;
      const contact = `${translate.questions}: ${seriesObject.contact}`;

      return [
        numberOfLessons,
        averageDuration,
        contact,
      ];
    },
  },
  created() {
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

<style>
#title-flex {
  display: flex;
  gap: 1em;
}

#title-and-metadata {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  max-height: 100%;
}

#series-title {
  width: stretch;
}

#body-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
