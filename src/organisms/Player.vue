<template>
  <div id="player-outer-container">

  </div>
</template>

<script>
export default {
  name: 'Player',
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
