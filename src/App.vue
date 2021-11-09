<template>
  <Header />
  <Body>
    <router-view />
  </Body>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Body from '@/components/body/Body.vue';

export default {
  components: {
    Body,
    Header,
  },
  created() {
    this.$store.dispatch('user/retrieveData');
    // TODO: localStorage('languagePreference') read (here) && write
    this.$store.dispatch('lang/loadLanguage', 'en');
    console.log(this.$store.state.user);
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
  align-items: stretch;
  width: 100vw;
  height: 100vh;
  gap: 3em;
}

/* CSS variables */
:root {
  --main-background: rgb(255, 255, 255);
  --titles-background: rgb(58, 42, 173);
  --title-background: rgb(64, 217, 75); /* TODO: improve the header CSS */
  --subtitle-background: rgb(64, 217, 75);
  --lighter-grey: rgba(0, 0, 0, 0.15);
  --light-grey: rgba(0, 0, 0, 0.3);
  --middle-grey: rgba(0, 0, 0, 0.5);
  --dark-grey: rgba(0, 0, 0, 0.7);
  --darker-grey: rgba(0, 0, 0, 0.85);
  --slim-shadow-box: 0 1px 3px var(--light-grey);
}

</style>
