<template>
  <div id="player-outer-container">
    <Progression />
    <Controler />
  </div>
</template>

<script>
import Controler from '@/molecules/Controler.vue';
import Progression from '@/molecules/Progression.vue';

export default {
  name: 'Player',
  components: {
    Controler,
    Progression,
  },
};
</script>

<style lang="css" scoped>
#player-outer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--player-height);
  background: var(--cut-background);
}
</style>
