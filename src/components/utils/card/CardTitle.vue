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
.card-title {
  margin: 0px;
}

.title-container {
  cursor: pointer;
  padding: .3em;
}
</style>
