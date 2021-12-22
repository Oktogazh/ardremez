<template>
  <DualCarousel :slidingState="state" @closing="closeThis">
    <template #firstSlot>
      <EmailForm @next="next" />
    </template>
    <template #secondSlot>
      <GoBack @click="state = 0" />
      <PasswordForm v-if="member" :email="email" @authorized="closeThis"/>
      <NewPswForm v-else :email="email" />
    </template>
  </DualCarousel>
</template>

<script>
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
  data() {
    return {
      email: '',
      member: null,
      state: 0,
    };
  },
  methods: { // TODO: create a closing method
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
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}

.access-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  padding: 5%;
  border-radius: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(54, 54, 54, 0.65);
  background-image: url(/img/Beg_ar_Vann.jpg);
}
</style>
