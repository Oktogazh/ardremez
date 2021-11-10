<template>
  <div id="body-container">
    <slot></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#body-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
</style>
