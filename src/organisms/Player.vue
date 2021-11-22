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

<style scoped>
#player-outer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--player-height);
  background: var(--dark-black);
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}

:deep(*) {
  color: var(--light-white);
}
</style>
