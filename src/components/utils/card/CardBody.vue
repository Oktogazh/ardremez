<template>
  <div class="body-container">
    <p><slot></slot></p>
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
}
</style>
