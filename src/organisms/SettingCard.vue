<template>
  <HeadedCard :radius="'9px'">
    <template v-slot:header>
      <h2 v-html="translate.Manage_My_Account"></h2>
    </template>
    <template v-slot:body>
      <div id="account-options">
        <div id="verify-email" class="option-container">
          <h3>{{ translate.My_email_address }}</h3>
          <h5>{{ $store.state.user.email }}</h5>
          <h4 v-if="!$store.state.user.customerId" @click="sendVerificationEmail"
            class="option">
            {{ translate.Email_Verification }}</h4>
        </div>
        <div id="delete-account" @click="deleteAccount">
          <h4 class="option">{{ translate.Delete_My_Account }}</h4>
        </div>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import swal from 'sweetalert2';
import HeadedCard from '@/molecules/HeadedCard.vue';

export default {
  name: 'Account',
  components: {
    HeadedCard,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      translate: (state) => state.lang,
    }),
    isSubscribed() {
      const filter = (subObj) => subObj.status === 'active' || subObj.status === 'past_due';
      const stillSubscribed = (this.user.subscriptions.findIndex(filter) !== -1);
      return stillSubscribed;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    deleteAccount() {
      const self = this;

      if (this.isSubscribed) {
        swal.fire({
          text: this.translate.must_unsubscibe_before_delete_account,
          confirmButtonText: this.translate.OK,
        });
      } else {
        this.$store.dispatch('user/deleteAccount')
          .then(self.$router.push({ path: '/' }))
          .catch();
      }
    },
    sendVerificationEmail() {
      this.$store.dispatch('user/newVerificationEmail')
        .then(swal.fire({
          html: this.translate.new_verificationCode_sent_info,
          confirmButtonText: this.translate.OK,
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
