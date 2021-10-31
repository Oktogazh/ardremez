<template>
  <div class="titles-container">
    <div class="title">
      <h1>{{ $store.state.lang[$store.state.app.title] }}</h1>
    </div>
    <div class="subtitle">
      <h2>{{ $store.state.app.subtitle? $store.state.lang[$store.state.app.subtitle]: null }}</h2>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.titles-container {
  display: flex;
  flex-direction: row;
  background-color: rgb(46, 208, 160);
}

.title {
}

.subtitle {
}
</style>
