<template>
  <div class="title-container" @click="$emit('toggle')">
    <h2 class="card-title"><slot></slot></h2>
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
  padding: .3em;
  border-bottom: solid 1px var(--lighter-black);
}

.card-title {
  margin: 0px;
  padding: 0 1.5em;
}
</style>
