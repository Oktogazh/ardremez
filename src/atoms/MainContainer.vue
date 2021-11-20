<template>
  <div id="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
};
</script>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  border: solid 1px black;
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
