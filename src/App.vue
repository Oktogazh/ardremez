<template>
  <Header />
  <MainContainer>
    <router-view />
  </MainContainer>
</template>

<script>
import MainContainer from '@/atoms/MainContainer.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    MainContainer,
    Header,
  },
  created() {
    this.$store.dispatch('user/retrieveData');
    // TODO: localStorage('languagePreference') read (here) && write
    this.$store.dispatch('lang/loadLanguage', 'en');
  },
};
</script>

<style>
body {
  direction: var(--direction);
  margin: 0px;
  background: var(--cyanish);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* main axis (vertical) */
  align-items: stretch;
  width: 100%;
  height: 100vh;
}

/* CSS variables */
:root {
  --direction: ltr;
  --card-background: rgb(255, 255, 255);
  --cut-background: linear-gradient(135deg, transparent 2em, #fff 0) top left;
  --titles-background: rgb(113, 99, 217);
  --title-background: rgb(64, 217, 75); /* TODO: improve the header CSS */
  --todo-background: rgb(195, 48, 106);
  --subtitle-background: rgb(64, 217, 75);
  --lighter-black: rgba(0, 0, 0, 0.15);
  --light-black: rgba(0, 0, 0, 0.3);
  --middle-black: rgba(0, 0, 0, 0.5);
  --dark-black: rgba(0, 0, 0, 0.7);
  --darker-black: rgba(0, 0, 0, 0.85);
  --lighter-white: rgba(255, 255, 255, 0.85);
  --light-white: rgba(255, 255, 255, 0.7);
  --middle-white: rgba(255, 255, 255, 0.5);
  --dark-white: rgba(255, 255, 255, 0.3);
  --darker-white: rgba(255, 255, 255, 0.15);
  --blueish: linear-gradient(135deg, rgba(94,201,255,1) 0%,
    rgba(43,76,245,1) 50%, rgba(145,111,255,1) 100%);
  --cyanish: linear-gradient(135deg, rgba(93,201,255,1) 0%,
    rgba(109,255,252,1) 50%, rgba(146,111,255,1) 100%);
  --greenish: linear-gradient(135deg, rgba(183,255,116,1) 0%,
    rgba(141,255,155,1) 50%, rgba(86,255,215,1) 100%);
  --greyish: linear-gradient(135deg, rgba(179,179,179,1) 0%,
    rgba(153,153,153,1) 50%, rgba(212,212,212,1) 100%);
  --purpleish: linear-gradient(135deg, rgba(109,187,255,1) 0%,
    rgba(217,81,255,1) 50%, rgba(67,75,255,1) 100%);
  --redish: linear-gradient(135deg, rgba(238,255,51,1) 0%,
    rgba(255,40,40,1) 50%, rgba(255,124,46,1) 100%);
  --slim-box-shadow: 0 1px 2px;
  --wide-box-shadow: 0 2px 4px 2px;
}

a, button {
  all: unset;
}

</style>
