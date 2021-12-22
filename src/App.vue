<template>
  <LoggingCarousel v-if="app.loggingRequired || redirect()" />
  <Header />
  <router-view />
</template>

<script>
import { mapState } from 'vuex';
import LoggingCarousel from '@/organisms/LoggingCarousel.vue';
import Header from '@/organisms/Header.vue';

export default {
  components: {
    LoggingCarousel,
    Header,
  },
  computed: {
    ...mapState({
      app: (state) => state.app,
    }),
  },
  created() {
    this.$store.dispatch('user/retrieveData');
    // TODO: localStorage('languagePreference') read (here) && write
    this.$store.dispatch('lang/loadLanguage', 'fr');
  },
  methods: {
    redirect() {
      const { nextRoute } = this.app;
      this.$store.dispatch('app/notLogging', { next: null });
      if (nextRoute) this.$router.push(nextRoute);
      return false;
    },
  },
};
</script>

<style>
body {
  direction: var(--direction);
  margin: 0px;
  background: var(--grad-cyan);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100vh;
}

/* CSS variables */
:root {
  --direction: ltr;
  --card-background: rgb(255, 255, 255);
  --cut-background: linear-gradient(135deg, transparent 2em, #8c8c8c 0) top left;
  --titles-background: rgb(113, 99, 217);
  --title-background: rgb(64, 217, 75); /* TODO: improve the header CSS */
  --todo-background: rgb(195, 48, 106);
  --subtitle-background: rgb(64, 217, 75);
  --lighter-black: rgba(0, 0, 0, 0.15);
  --light-black: rgba(0, 0, 0, 0.3);
  --middle-black: rgba(0, 0, 0, 0.5);
  --dark-black: rgba(0, 0, 0, 0.7);
  --darker-black: rgba(0, 0, 0, 0.85);
  --lighter-white: rgba(255, 255, 255, 0.95);
  --light-white: rgba(255, 255, 255, 0.7);
  --middle-white: rgba(255, 255, 255, 0.5);
  --dark-white: rgba(255, 255, 255, 0.3);
  --darker-white: rgba(255, 255, 255, 0.15);
  --gold: rgb(240, 211, 17);
  --grad-blue: radial-gradient(circle,
    rgba(43,76,245,1) 0%, rgba(145,111,255,1) 100%);
  --grad-cyan: linear-gradient(135deg, rgba(93,201,255,1) 0%,
    rgba(109,255,252,1) 50%, rgba(146,111,255,1) 100%);
  --grad-green: linear-gradient(320deg, rgba(61,217,0) 0%, rgba(12,242,187) 100%);
  --grad-grey: linear-gradient(135deg, rgba(179,179,179,1) 0%,
    rgba(153,153,153,1) 50%, rgba(212,212,212,1) 100%);
  --grad-purple: linear-gradient(135deg, rgba(109,187,255,1) 0%,
    rgba(217,81,255,1) 50%, rgba(67,75,255,1) 100%);
  --grad-red: linear-gradient(135deg, rgba(238,255,51,1) 0%,
    rgba(255,40,40,1) 50%, rgba(255,124,46,1) 100%);
  --slim-box-shadow: 0 1px 2px;
  --wide-box-shadow: 0 2px 4px 2px;
  --player-height: 4.5em;
  --header-height: 4em;
}

a, button, figcaption {
  all: unset;
  cursor: pointer;
}

h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin: .75em 2em;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.3em;
    margin: 1em .7em 0 0;
    font-weight: bold;
}
h5 {
    display: block;
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
h6 {
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
</style>
