<template>
  <AccountCard />
</template>

<script>
import AccountCard from '@/components/account/AccountCard.vue';

export default {
  name: 'Account',
  components: {
    AccountCard,
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'My_Account' });
  },
};
</script>

<style scoped>
</style>
