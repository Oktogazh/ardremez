<template>
  <ul>
    <li v-if="$store.state.app.language !== 'br'"
      @click="setLanguage('br')"><h4>{{ $store.state.lang.Breton }}</h4></li>
    <li v-if="$store.state.app.language !== 'en'"
      @click="setLanguage('en')"><h4>{{ $store.state.lang.English }}</h4></li>
    <li v-if="$store.state.app.language !== 'fr'"
      @click="setLanguage('fr')"><h4>{{ $store.state.lang.French }}</h4></li>
  </ul>
</template>

<script>
export default {
  name: 'OtherLanguages',
  methods: {
    setLanguage(code) {
      this.$store.dispatch('lang/loadLanguage', code);
      this.$emit('closing', 'languagesMenu');
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('closing', 'languagesMenu');
      }
    },
  },
  mounted() {
    const delay = (ms) => new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });

    // if not delayed, the click mounting the component triggers the listener
    // and close the menu instantly
    delay(250)
      .then(() => document.addEventListener('click', this.close));
  },
  beforeUnmount() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  cursor: pointer;
}
</style>
