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
  height: 100%;
  margin: 0 1em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  text-align: center;
}
</style>
