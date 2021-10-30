<template>
  <div class="title-container">
    <h1><slot name="title">Default title</slot></h1>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: [
    // title,
  ],
};
</script>

<style scoped>
.title-container {
  background-color: rgb(181, 181, 181);
}
</style>
