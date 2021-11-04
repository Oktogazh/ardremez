<template>
  <Access v-if="accessPortal && !$store.getters['user/connected']"
    @closing="$router.push('/')" @logged="accessPortal = false" />
  <CheckingCodeCard @sendCode="check" />
</template>

<script>
import swal from 'sweetalert2';
import axios from 'axios';
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
          if (verified) {
            this.$router.push({ name: 'Home' });
            swal.fire({
              icon: 'success',
              html: this.$store.state.lang.Email_successfully_verified,
              confirmButtonText: this.$store.state.lang.OK,
            });
          } else {
            axios.post(`${this.$store.state.api}/api/kas_kod_postel`);
            swal.fire({
              icon: 'error',
              html: this.$store.state.lang.Wrong_code_New_code_sent,
              confirmButtonText: this.$store.state.lang.OK,
            });
          }
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
