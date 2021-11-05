<template>
  <EmptyCard :togglable="false">
    <template v-slot:title>
      {{ $store.state.lang.Manage_My_Account }}
    </template>
    <template v-slot:body>
      <div id="account-options">
        <div id="verify-email" class="option-container">
          <h3>{{ $store.state.lang.My_email_address }}</h3>
          <h5>{{ $store.state.user.email }}</h5>
          <h4 v-if="!$store.state.user.verified" @click="sendVerificationEmail"
            class="option">
            {{ $store.state.lang.Email_Verification }}</h4>
        </div>
        <div id="delete-account" @click="deleteAccount">
          <h4 class="option">{{ $store.state.lang.Delete_My_Account }}</h4>
        </div>
      </div>
    </template>
  </EmptyCard>
</template>

<script>
import swal from 'sweetalert2';
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'Account',
  components: {
    EmptyCard,
  },
  data() {
    return {
    };
  },
  methods: {
    deleteAccount() {
      const self = this;

      if (this.$store.state.user.subscriptionActive) {
        swal.fire({
          text: this.$store.state.lang.must_unsubscibe_before_delete_account,
          confirmButtonText: this.$store.state.lang.OK,
        });
      } else {
        this.$store.dispatch('user/deleteAccount')
          .then(self.$router.push({ path: '/' }))
          .catch((e) => console.error(e));
      }
    },
    sendVerificationEmail() {
      this.$store.dispatch('user/newVerificationEmail')
        .then(swal.fire({
          html: this.$store.state.lang.new_verificationCode_sent_info,
          confirmButtonText: this.$store.state.lang.OK,
        }))
        .then(this.$router.push({ name: 'Verify' }));
      return null;
    },
  },
};
</script>

<style scoped>
.option-container {
  border-bottom: 1px solid rgb(0, 0, 0);
  margin-bottom: 1em;
}

.option {
  cursor: pointer;
}

#account-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#delete-account {
  color: rgb(227, 58, 58);
}

#verify-email {
}
</style>
