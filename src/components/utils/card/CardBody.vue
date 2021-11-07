<template>
  <div class="body-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
};
</script>

<style scoped>

.body-container {
  background-color: rgb(224, 224, 224);
  padding: 2em;
  margin: 0;
}
</style>
