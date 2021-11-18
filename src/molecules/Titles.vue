<template>
  <div class="titles-container">
    <router-link :to="{ name: 'Home'}">
      <img id="home-logo" src="/img/logo.svg">
    </router-link>
    <div class="title">
      <h1>{{ translate[header.title] }}</h1>
    </div>
    <div class="subtitle">
      <h2 v-html="header.subtitle"></h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      translate(state) {
        return state.lang;
      },
    }),
    ...mapState({
      header(state) {
        return state.app;
      },
    }),
  },
};
</script>

<style scoped>
.titles-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  /*background-color: var(--titles-background);*/
}

.title {
  /*background-color: var(--title-background);*/
}

.subtitle {
}

#home-logo {
  height: 4em;
  width: 4em;
  cursor: pointer;
}
</style>
