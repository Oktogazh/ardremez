<template>
  <div class="title-container" @click="$emit('toogle')">
    <h2 class="card-title"><slot></slot></h2>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
};
</script>

<style scoped>
.card-title {
  margin: 0px;
}

.title-container {
  background-color: rgb(181, 181, 181);
  cursor: pointer;
}
</style>
