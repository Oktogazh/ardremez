<template>
  <div class="titles-container">
    <router-link :to="{ name: 'Home'}">
      <img id="home-logo" src="/img/logo.svg">
    </router-link>
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
  align-items: center;
  background-color: rgb(46, 208, 160);
}

.title {
}

.subtitle {
}

#home-logo {
  height: 4em;
  width: 4em;
  cursor: pointer;
}
</style>
