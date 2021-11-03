<template>
  <Access v-if="accessPortal && !$store.getters['user/connected']"
    @closing="$router.push('/')" @logged="accessPortal = false" />
  <CheckingCodeCard @sendCode="check" />
</template>

<script>
import CheckingCodeCard from '@/components/utils/CheckingCodeCard.vue';
import Access from '@/components/header/auth/Access.vue';

export default {
  name: 'Verify',
  components: {
    Access,
    CheckingCodeCard,
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'Email_Verification' });
  },
  data() {
    return {
      accessPortal: true,
    };
  },
  methods: {
    check(code) {
      this.$store.dispatch('user/verifyEmail', code);

      return code;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
