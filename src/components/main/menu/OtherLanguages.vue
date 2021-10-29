<template>
  <ul>
    <li if="$store.state.app.language !== 'br'"
      @click="setLanguage('br')">{{ $store.state.lang.Breton }}</li>
    <li if="$store.state.app.language !== 'en'"
      @click="setLanguage('en')">{{ $store.state.lang.English }}</li>
    <li if="$store.state.app.language !== 'fr'"
      @click="setLanguage('fr')">{{ $store.state.lang.French }}</li>
  </ul>
</template>

<script>
export default {
  name: 'OtherLanguages',
  methods: {
    setLanguage(code) {
      this.$store.dispatch('changeLanguage', code);
      this.$emit('closing', 'languagesMenu');
    },
  },
};
</script>

<style lang="css" scoped>
</style>
