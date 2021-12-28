<template>
  <div>
    <ul><!--
      <li @click="$emit('openOption', 'languagesMenu')">
        <h3>{{ $store.state.lang.Other_Languages }}</h3>
      </li>-->
      <li v-if="!$store.getters['user/connected']"
        @click="logIn">
        <h3>{{ $store.state.lang.Access }}</h3>
      </li>
      <li v-if="$store.getters['user/connected'] &&
        $router.currentRoute.value.name !== 'Account'"
        @click="$router.push('dashboard')">
        <h3>{{ $store.state.lang.My_Account }}</h3>
      </li>
      <li v-if="$store.getters['user/connected']"
        @click="logOut">
        <h3>{{ $store.state.lang.Log_Out }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuOptions',
  components: {
  },
  methods: {
    close() {
      this.$emit('close');
    },
    logIn() {
      const { path } = this.$router.currentRoute.value;
      const params = { next: path, redirect: path, logging: true };

      this.$store.dispatch('app/logStatusAndRoute', params);
    },
    logOut() {
      const self = this;
      const path = '/';

      this.$store.dispatch('user/logOut')
        .then(self.$router.push(path));
    },
  },
  mounted() {
    const delay = (ms) => new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });

    // if not delayed, the click mounting the component triggers the listener
    // and close the menu instantly
    delay(10)
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
