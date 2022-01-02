<template>
  <HeadedCard :radius="'9px'">
    <template #header>
      <h2 v-html="translate.Manage_My_Account"></h2>
    </template>
    <template #body>
      <div id="account-options">
        <!-- if needing specific styling, use the # selector -->
        <KeyValuePair v-for="({ id, action, condition, key, value }, index) in settings"
          :id="id" :action="action" :condition="condition"
          :keyTitle="key" :value="value" :key="index" >
        </KeyValuePair>
      </div>
    </template>
  </HeadedCard>
</template>

<script>
import { mapState } from 'vuex';
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
    settings() {
      return [
        {
          id: 'setting-change-password',
          action: this.changePsw, // TODO
          condition: false,
          key: this.translate.changeMyPsw,
        },
        {
          id: 'setting-display-email',
          action: null,
          key: this.translate.My_email_address,
          value: this.user.email,
        },
        {
          id: 'setting-email-verification',
          condition: (!this.$store.state.user.customerId),
          action: this.sendVerificationEmail,
          key: this.translate.Email_Verification,
        },
        {
          id: 'setting-change-email',
          action: this.changeEmail, // TODO
          condition: false,
          key: this.translate.changeEmail,
        },
        {
          id: 'setting-delete-account',
          action: this.deleteAccount,
          key: this.translate.Delete_My_Account,
        },
      ];
    },
  },
  data() {
    return {
    };
  },
  methods: {
    changeEmail() {
      return null;
    },
    changePsw() {
      return null;
    },
    deleteAccount() {
      const {
        $router,
        $store,
        isSubscribed,
        translate,
      } = this;

      if (isSubscribed) {
        window.swal.fire({
          text: translate.must_unsubscibe_before_delete_account,
          confirmButtonText: translate.OK,
        });
      } else {
        const { path } = $router.currentRoute.value;
        const next = `${path}?delete=true`;
        const params = {
          logging: true,
          next,
          redirect: path,
        };

        $store.dispatch('app/logStatusAndRoute', params);
      }
    },
    deleteConfirmed() {
      const { $store, $router } = this;

      $store.dispatch('user/deleteAccount')
        .then($router.push({ path: '/' }))
        .catch();
    },
    sendVerificationEmail() {
      const {
        $router,
        $store,
        translate,
      } = this;
      $store.dispatch('user/newVerificationEmail')
        .then(window.swal.fire({
          html: translate.new_verificationCode_sent_info,
          confirmButtonText: translate.OK,
        }));
    },
  },
};
</script>

<style>
#account-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#setting-delete-account {
  color: rgb(227, 58, 58);
}

#setting-verify-email {
}
</style>
