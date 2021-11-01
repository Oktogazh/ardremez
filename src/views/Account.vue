<template>
  <div class="account">
    <h1>Manage your account here</h1>
  </div>
</template>

<script>
export default {
  name: 'Account',
  created() {
    console.log(this.$router.currentRoute.value.name);
  },
};
</script>

<style scoped>
</style>
