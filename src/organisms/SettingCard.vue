<template>
  <HeadedCard :radius="'9px'">
    <template #header>
      <h2 v-html="translate.Manage_My_Account"></h2>
    </template>
    <template #body>
      <div id="account-options">
        <KeyValuePair id="change-password">
          <template #key>
            {{ translate.changePsw }}
          </template>
        </KeyValuePair>
        <KeyValuePair id="email">
          <template #key>
            {{ translate.My_email_address }}
          </template>
          <template #value>
            {{ $store.state.user.email }}
          </template>
          <h4 v-if="!$store.state.user.customerId" @click="sendVerificationEmail"
            class="option">
            {{ translate.Email_Verification }}</h4>
        </KeyValuePair>
        <KeyValuePair id="email-verification">
          <template #value>
            <button v-if="!$store.state.user.customerId" @click="sendVerificationEmail"
              class="option">
              {{ translate.Email_Verification }}
            </button>
          </template>
        </KeyValuePair>
        <KeyValuePair id="change-email">
          <template #value>
            {{ translate.changeEmail }}
          </template>
        </KeyValuePair>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
import swal from 'sweetalert2';
import KeyValuePair from '@/atoms/display/KeyValuePair.vue';
import HeadedCard from '@/molecules/HeadedCard.vue';

export default {
  name: 'Account',
  components: {
    HeadedCard,
    KeyValuePair,
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
