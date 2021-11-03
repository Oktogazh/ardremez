<template>
  <CheckingCodeCard>
  </CheckingCodeCard>
</template>

<script>
import CheckingCodeCard from '@/components/utils/CheckingCodeCard.vue';

export default {
  name: 'Verify',
  components: {
    CheckingCodeCard,
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'Email_Verification' });
  },
};
</script>

<style lang="css" scoped>
</style>
