<template>
  <div class="title-container">
    <h1><slot></slot></h1>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
};
</script>

<style scoped>
.title-container {
  background-color: rgb(181, 181, 181);
}
</style>
