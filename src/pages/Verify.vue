<template>
  <MainContainer>
    <CheckingCodeCard @sendCode="check" />
  </MainContainer>
</template>

<script>
import swal from 'sweetalert2';
import CheckingCodeCard from '@/atoms/CheckingCodeCard.vue';
import MainContainer from '@/atoms/MainContainer.vue';

export default {
  name: 'Verify',
  components: {
    CheckingCodeCard,
    MainContainer,
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
          if (verified) {
            this.$router.push({ name: 'Home' });
            swal.fire({
              icon: 'success',
              html: this.$store.state.lang.Email_successfully_verified,
              confirmButtonText: this.$store.state.lang.OK,
            });
          } else {
            swal.fire({
              icon: 'error',
              html: this.$store.state.lang.Wrong_code_New_code_sent,
              confirmButtonText: this.$store.state.lang.OK,
            });
          }
        });
    },
    checkIfLoggedIn() {
      if (!this.$store.state.user.email) {
        const redirect = '/';
        this.$store.dispatch('app/logAndRoute', { redirect });
      }
    },
  },
  mounted() {
    this.checkIfLoggedIn();
  },
};
</script>

<style scoped>
</style>
