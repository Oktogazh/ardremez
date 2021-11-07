<template>
  <div class="body-container">
    <p class="card-body"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
};
</script>

<style scoped>
.card-body {
  padding: 2em;
  margin: 0;
}

.body-container {
  background-color: rgb(224, 224, 224);
}
</style>
