<template>
  <div class="title-container" @click="$emit('toggle')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
};
</script>

<style scoped>
.title-container {
  cursor: pointer;
  border-bottom: solid 1px var(--lighter-black);
}
</style>
