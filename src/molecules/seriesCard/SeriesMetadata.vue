<template>
  <div id="metadata-container">
    <PetiteCaps v-for="(info, index) in metadataBox" :key="index" :text="info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetiteCaps from '@/atoms/display/PetiteCaps.vue';

export default {
  name: 'SeriesMetadata',
  components: {
    PetiteCaps,
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
  props: {
    seriesObject: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
</style>
