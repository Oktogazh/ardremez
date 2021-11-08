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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  background-color: rgb(224, 224, 224);
}
</style>
