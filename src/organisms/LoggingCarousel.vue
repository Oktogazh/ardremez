<template>
  <DualCarousel :slidingState="state" @closing="closeThis">
    <template #firstSlot>
      <EmailForm @next="next" ref="emailForm"/>
    </template>
    <template #secondSlot>
      <GoBack @click="prev" />
      <PasswordForm v-if="member" :email="email" @authorized="closeThis">
        <template #option>
          <button v-html="translate.Psw_Forgotten" @click.prevent>
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
    signIn(password) {
      const { email } = this;
      this.$store.dispatch('user/signin', { email, password })
        .then(this.$store.commit('app/SET_NEXT_ROUTE', { next: '/verify' }))
        .then(this.logged);
    },
  },
};
</script>
