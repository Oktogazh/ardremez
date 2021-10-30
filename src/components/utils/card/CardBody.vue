<template>
  <div class="body-container">
    <p><slot name="body">Default body</slot></p>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
  props: [
    // body,
  ],
};
</script>

<style scoped>
.body-container {
  background-color: rgb(224, 224, 224);
}
</style>
