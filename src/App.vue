<template>
  <router-view/>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('user/retrieveData');
    // TODO: localStorage('languagePreference') read (here) && write
    this.$store.dispatch('lang/loadLanguage', 'en');
  },
};
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* main axis (vertical) */
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
