<template >
  <div id="controler">
    <Download :size="'2.5em'" :id="prev" :angle="90"/>
    <Download :size="'2.5em'" :id="next" :angle="-90"/>
  </div>
</template>

<script>
import Download from '@/atoms/actions/Download.vue';

export default {
  name: 'Controler',
  components: {
    Download,
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
