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
      const { email } = this.$store.state.user;
      this.$store.dispatch('user/verifyEmail', { email, code })
        .then((verified) => {
          if (verified) this.$router.push({ name: 'Home' });
          // TODO: send a new verification email && sweetalert2, bad code or past delay
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
