<template>
  <form class="form-container">
    <slot></slot>
  </form>
</template>

<script>
export default {
};
</script>

<style scoped>
.form-container {
  margin: 1em;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
}
</style>
