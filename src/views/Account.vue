<template>
  <div class="account">
    <h1>Manage your account here</h1>
  </div>
</template>

<script>
export default {
  name: 'Account',
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'My_Account' });
  },
};
</script>

<style scoped>
</style>
