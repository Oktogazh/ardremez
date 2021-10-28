<template>
  <div class="mainCard">
    <h1>{{ $store.state.lang.Connected }}: {{ $store.getters['user/connected'] }}</h1>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.mainCard {
  display: flex;
  position: static;
  margin: 0 auto;
  max-width: 900px;
  max-height: 400px;
  background-color: rgb(144, 255, 203);
  border-radius: 2rem;
}

</style>
