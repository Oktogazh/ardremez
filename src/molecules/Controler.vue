<template >
  <div id="controler">
    <Load :active="hasPrev" :size="'2.5em'" :angle="'90deg'" @click="loading('prev')"/>
    <Load :active="hasNext" :size="'2.5em'" :angle="'-90deg'" @click="loading('next')"/>
  </div>
</template>

<script>
import Load from '@/atoms/actions/Load.vue';

export default {
  name: 'Controler',
  components: {
    Load,
  },
  computed: {
    hasNext() {
      const id = parseInt(this.$store.state.lesson.id, 10);
      const max = parseInt(this.$store.state.series.series[0].metadata.podcasts, 10);
      return (max !== id);
    },
    hasPrev() {
      const id = parseInt(this.$store.state.lesson.id, 10);
      return (id !== 1);
    },
  },
  methods: {
    loading(name) {
      const { code } = this.$store.state.series.series[0];
      console.log(name);
      const sign = (name === 'prev') ? -1 : 1;
      const max = this.$store.state.series.series[0].metadata.podcasts;
      // const freeTrial = this.$store.state.series.series[0].metadata.freeTrial;
      const id = parseInt(this.$store.state.lesson.id, 10);
      const askingFor = sign * 1 + id;

      if (askingFor < 1 || askingFor > max) return null;

      return this.$router.push({
        path: '/read',
        query: {
          p: `${askingFor}${code}`,
        },
      });
    },
  },
};
</script>

<style scoped>
#controler {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

@media only screen and (max-width: 650px) {
  #controler {
    margin: auto;
  }
}
</style>
