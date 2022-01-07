<template>
  <DualCarousel :slidingState="state" @closing="closeThis" :bg="url" :minHeight="'400px'">
    <template #firstSlot>
      <EmailForm @next="next" ref="emailForm">
        <template #instructions>
          <h2 v-html="translate.Welcome"></h2>
          <span v-html="translate.Enter_Your_Email_Address"></span>
        </template>
      </EmailForm>
    </template>
    <template #secondSlot>
      <GoBack v-if="!emailCode" @click="prev" />
      <PasswordForm v-if="member" :email="email" @authorized="logged">
        <template #option>
          <button type="button" v-html="translate.Psw_Forgotten" @click="pswForgotten">
          </button>
        </template>
      </PasswordForm>
      <NewPswForm v-else :email="email" @pwdApproved="findAction">
        <template #instructions>
            <h2 v-html="instructions"></h2>
        </template>
      </NewPswForm>
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
      email: (state) => state.user.email,
      translate: (state) => state.lang,
      emailCode: (state) => state.user.emailCode,
      nextRoute: (state) => state.app.nextRoute,
    }),
    instructions() {
      const { chooseANewPsw, chooseAPsw } = this.translate;
      const instructions = this.emailCode ? chooseANewPsw : chooseAPsw;

      return instructions;
    },
  },
  data() {
    return {
      member: null,
      state: 0,
      url: 'url(/img/Beg_ar_Vann.jpg)',
      counter: 0,
    };
  },
  methods: {
    closeThis() {
      const { $router, $store } = this;
      const redirect = $store.state.app.redirectRoute;
      const params = {
        logging: false,
        next: null,
        redirect: '/',
      };
      $store.dispatch('app/logStatusAndRoute', params)
        .then(() => {
          if (redirect === 'back') return $router.go(-1);
          return $router.push(redirect);
        });
    },
    findAction(password) {
      const { emailCode, reinitializePsw, signIn } = this;

      return (emailCode !== null) ? reinitializePsw(password) : signIn(password);
    },
    logged() {
      const { nextRoute, $router } = this;
      const next = (nextRoute === '/dashboard?delete=true') ? nextRoute : null;
      const params = {
        logging: false,
        next,
        redirect: '/',
      };

      this.$store.dispatch('app/logStatusAndRoute', params)
        .then(() => {
          if (next === 'reload') $router.go();
          else $router.push(nextRoute || {});
        });
    },
    next({ email, member }) {
      this.$store.commit('user/SET_USER_DATA', { email });
      this.member = member;
      this.state = 1;
    },
    prev() {
      this.$refs.emailForm.init();
      this.state = 0;
    },
    pswForgotten(evt, newAttempt = false) {
      const { email, $store, translate } = this;

      window.axios.post(`${$store.state.api}/api/send_psw_code`, { email })
        .then(() => {
          if (!newAttempt) {
            window.swal.fire({
              icon: 'info',
              html: translate.loggingLinkSent,
            });
          }
        })
        .catch();
    },
    reinitializePsw(password) {
      const {
        closeThis,
        logged,
        translate,
        pswForgotten,
        $store,
      } = this;
      $store.dispatch('user/reinitializePsw', password)
        .then((success) => {
          if (success) {
            logged();
            window.swal.fire({
              icon: 'success',
              html: translate.yourNewPswHasBeenRegistered,
            });
          } else {
            pswForgotten(null, { newAttempt: true });
            closeThis();
            window.swal.fire({
              icon: 'error',
              html: translate.linkHasExpired_NewLinkSent,
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    signIn(password) {
      const {
        closeThis,
        email,
        translate,
        $store,
      } = this;

      $store.dispatch('user/signin', { email, password })
        .then((signed) => {
          if (!signed) {
            return {
              icon: 'error',
              html: translate.problemOccurredTryLater,
            };
          }
          return {
            icon: 'info',
            html: translate.verificationLinkSent,
          };
        })
        .then(({ icon, html }) => {
          window.swal.fire({
            icon,
            html,
          });
          closeThis();
        });
    },
  },
  mounted() {
    if (this.$store.state.user.jwt) {
      this.state = 1;
      this.member = true;
    }
    if (this.emailCode !== null) this.state = 1;
  },
};
</script>
