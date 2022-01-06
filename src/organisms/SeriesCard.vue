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
          <div id="metadata-container">
            <PetiteCaps v-for="(info, index) in metadataBox" :key="index" :text="info" />
          </div>
          <SeriesCardActions :seriesObject="seriesObject" />
        <!-- Title & Metadata End -->
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div id="body-container">
        <div class="">
          <p v-for="(paragraph, index) in seriesObject.description" :key="index" v-html="paragraph">
          </p>
        </div>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import HeadedCard from '@/molecules/HeadedCard.vue';
import SeriesCardActions from '@/molecules/seriesCard/SeriesCardActions.vue';
import ImageViewer from '@/molecules/seriesCard/ImageViewer.vue';
import DownButton from '@/atoms/buttons/DownButton.vue';
import PetiteCaps from '@/atoms/display/PetiteCaps.vue';
import UpButton from '@/atoms/buttons/UpButton.vue';

export default {
  name: 'SeriesCard',
  components: {
    DownButton,
    HeadedCard,
    ImageViewer,
    PetiteCaps,
    SeriesCardActions,
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
</style>
