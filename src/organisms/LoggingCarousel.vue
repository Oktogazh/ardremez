<template>
  <DualCarousel :slidingState="state" @closing="closeThis" :bg="url" :minHeight="'400px'">
    <template #firstSlot>
      <EmailForm @next="next" ref="emailForm">
        <template #intructions>
          <h2 v-html="translate.Welcome"></h2>
          <span v-html="translate.Enter_Your_Email_Address"></span>
        </template>
      </EmailForm>
    </template>
    <template #secondSlot>
      <GoBack @click="prev" />
      <PasswordForm v-if="member" :email="email" @authorized="closeThis">
        <template #option>
          <button v-html="translate.Psw_Forgotten" @click.prevent="pswForgotten">
          </button>
        </template>
      </PasswordForm>
      <NewPswForm v-else :email="email" @pwdApproved="signIn" />
    </template>
  </DualCarousel>
</template>

<script>
import { mapState } from 'vuex';
import DualCarousel from '@/molecules/DualCarousel.vue';
import EmailForm from '@/molecules/forms/EmailForm.vue';
import GoBack from '@/atoms/buttons/GoBack.vue';
import PasswordForm from '@/molecules/forms/PasswordForm.vue';
import NewPswForm from '@/molecules/forms/NewPswForm.vue';

export default {
  name: 'LoggingCarousel',
  components: {
    DualCarousel,
    EmailForm,
    GoBack,
    PasswordForm,
    NewPswForm,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
      email: '',
      member: null,
      state: 0,
      url: 'url(/img/Beg_ar_Vann.jpg)',
    };
  },
  methods: {
    closeThis() {
      const { redirectRoute } = this.$store.state.app;

      this.$store.dispatch('app/notLogging', { next: redirectRoute });
    },
    logged() {
      const { path } = this.$router.currentRoute.value;
      const { nextRoute } = this.$store.state.app;
      const next = nextRoute || path;

      this.$store.dispatch('app/notLogging', { next });
    },
    next({ email, member }) {
      this.email = email;
      this.member = member;
      this.state = 1;
    },
    prev() {
      this.$refs.emailForm.init();
      this.state = 0;
    },
    pswForgotten() {
      const { email, $store } = this;

      window.axios.post(`${$store.state.api}/api/send_psw_code`, { email })
        .then(() => {
          window.swal.fire({
            icon: 'info',
            html: this.translate.loggingLinkSent,
          });
        })
        .catch();
    },
    signIn(password) {
      const { email } = this;
      this.$store.dispatch('user/signin', { email, password })
        .then(this.$store.commit('app/SET_NEXT_ROUTE', { next: '/verify' }))
        .then(this.logged);
    },
  },
};
</script>
