<template>
  <LoggingCarousel v-if="loggingRequired" />
  <CheckoutCarousel v-if="product !== null" :product="product" />
  <Header />
  <router-view />
</template>

<script>
import { mapState } from 'vuex';
import Swal from 'sweetalert2';
import LoggingCarousel from '@/organisms/LoggingCarousel.vue';
import CheckoutCarousel from '@/organisms/checkout/CheckoutCarousel.vue';
import Header from '@/organisms/Header.vue';

window.swal = Swal;

export default {
  components: {
    CheckoutCarousel,
    LoggingCarousel,
    Header,
  },
  computed: {
    queries() {
      return this.$router.currentRoute.value.query;
    },
    ...mapState({
      loggingRequired: (state) => state.app.loggingRequired,
      product: (state) => state.payment.product,
      translate: (state) => JSON.parse(JSON.stringify(state.lang)),
      user: (state) => state.user,
    }),
  },
  async created() {
    this.$store.dispatch('user/retrieveData');
  },
  methods: {
    clearQueryParams() {
      const { path } = this.$router.currentRoute.value;
      window.history.replaceState({}, document.title, `/#${path}`);
    },
    async completePayment({ status, prodId }) {
      // TODO: swal.fire a message,
      // add this product to the subsciptions,
      // shift in a new progress object if not in the user.progress
      const {
        $router,
        translate,
      } = this;
      const { path } = $router.currentRoute.value;
      const {
        PaymentSuccessfullyProcessed,
        PaymentUnsuccessfullyProcessed,
      } = translate;
      switch (status) {
        case 'succeeded':
          // update the user's state,
          // inform the user and
          // delete the query params
          this.$store.dispatch('user/updateSubscription', {
            productId: prodId,
            status: 'active',
          });
          window.swal.fire({
            icon: 'success',
            html: PaymentSuccessfullyProcessed,
          });
          break;
        case 'processing':
          break;

        case 'requires_payment_method':
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          window.swal.fire({
            icon: 'error',
            html: PaymentUnsuccessfullyProcessed,
          });
          $router.push({ path, query: { product_id: prodId } });
          break;

        default:
          // message.innerText = 'Something went wrong.';
          break;
      }
      return { status, prodId };
    },
    getStatus({ clientSecret, status, prodId }) {
      if (status) {
        this.completePayment({ status, prodId });
      } else {
        const stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK);
        const self = this;

        stripe.retrievePaymentIntent(clientSecret)
          .then(({ paymentIntent }) => {
            const newStatus = paymentIntent.status;
            self.completePayment({ status: newStatus, prodId });
          });
      }
    },
    handleCheckoutParams() {
      const {
        getStatus,
        queries,
        translate,
        user,
        $store,
      } = this;
      const { search } = window.location;
      // 1. Starting checkout process
      const productId = queries.product_id;

      // 2. After payment intent
      const clientSecret = new URLSearchParams(search).get('payment_intent_client_secret');
      const prodId = new URLSearchParams(search).get('prod_id');
      const status = new URLSearchParams(search).get('redirect_status');

      // 3. Ending checkout process
      const { checkout } = queries;

      // 1. Starting checkout process
      if (productId && !user.customerId) {
        const { NeedaBeVerifiedToSub, newVerificationLinkSentInfo } = translate;
        const html = `${NeedaBeVerifiedToSub}<br>${newVerificationLinkSentInfo}`;

        const alert = {
          icon: 'info',
          html,
        };
        $store.dispatch('user/newVerificationEmail');
        window.swal.fire(alert);
      } else if (productId && user.customerId) {
        $store.dispatch('payment/startCheckout', productId);
        return null;
      }

      // 2. After payment intent
      if (clientSecret) {
        getStatus({ clientSecret, status, prodId });
        return null;
      }

      // 3. Ending checkout process
      if (checkout === 'ending') $store.dispatch('payment/endCheckout');

      return null;
    },
    handleEmailVerificationParams() {
      const { queries, translate, $store } = this;
      const { address, verifCode } = queries;
      if (!address && !verifCode) return null;

      $store.dispatch('user/verifyEmail', { address, code: verifCode })
        .then((res) => {
          if (res === true) {
            window.swal.fire({
              icon: 'success',
              html: translate.Email_successfully_verified,
              confirmButtonText: translate.OK,
            });
          } else if (res === 'ALREADYVERIFIED') {
            window.swal.fire({
              icon: 'info',
              html: translate.Email_successfully_verified,
              confirmButtonText: translate.OK,
            });
          } else {
            window.swal.fire({
              icon: 'error',
              html: translate.Wrong_code_New_code_sent,
              confirmButtonText: translate.OK,
            });
          }
        });
      return null;
    },
    handlePswReinitializationParams() {
      const { $store, $router } = this;
      const { path } = $router.currentRoute.value;
      const { address, newpsw } = this.queries;
      const params = {
        logging: true,
        redirect: {
          path,
          query: {
            newpsw: 'null',
          },
        },
        next: path,
      };

      if (newpsw === 'null') $store.dispatch('user/setUserData', { emailCode: null });
      if (address && newpsw) {
        $store.dispatch('user/setUserData', { email: address, emailCode: newpsw })
          .then($store.dispatch('app/logStatusAndRoute', params));
      }
    },
  },
  watch: {
    '$route.query': async function () {
      // TODO: localStorage('languagePreference') read (here) && write
      await this.$store.dispatch('lang/loadLanguage', 'fr');
      this.handleEmailVerificationParams();
      this.handleCheckoutParams();
      this.handlePswReinitializationParams();
      // this delete params is handled down the DOM tree
      if (this.queries.delete !== 'true') this.clearQueryParams();
    },
  },
};
</script>

<style>
body {
  direction: var(--direction);
  margin: 0;
  background: var(--grad-cyan);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100vh;
}

/* CSS variables */
:root {
  --direction: ltr;
  --card-background: rgb(255, 255, 255);
  --cut-background: linear-gradient(135deg, transparent 2em, #8c8c8c 0) top left;
  --titles-background: rgb(113, 99, 217);
  --title-background: rgb(64, 217, 75); /* TODO: improve the header CSS */
  --todo-background: rgb(195, 48, 106);
  --subtitle-background: rgb(64, 217, 75);
  --lighter-black: rgba(0, 0, 0, 0.15);
  --light-black: rgba(0, 0, 0, 0.3);
  --middle-black: rgba(0, 0, 0, 0.5);
  --dark-black: rgba(0, 0, 0, 0.7);
  --darker-black: rgba(0, 0, 0, 0.85);
  --lighter-white: rgba(255, 255, 255, 0.95);
  --light-white: rgba(255, 255, 255, 0.7);
  --middle-white: rgba(255, 255, 255, 0.5);
  --dark-white: rgba(255, 255, 255, 0.3);
  --darker-white: rgba(255, 255, 255, 0.15);
  --gold: rgb(240, 211, 17);
  --grad-blue: radial-gradient(circle,
    rgba(43,76,245,1) 0%, rgba(145,111,255,1) 100%);
  --grad-cyan: linear-gradient(135deg, rgba(93,201,255,1) 0%,
    rgba(109,255,252,1) 50%, rgba(146,111,255,1) 100%);
  --grad-green: linear-gradient(320deg, rgba(61,217,0) 0%, rgba(12,242,187) 100%);
  --grad-grey: linear-gradient(135deg, rgba(179,179,179,1) 0%,
    rgba(153,153,153,1) 50%, rgba(212,212,212,1) 100%);
  --grad-purple: linear-gradient(135deg, rgba(109,187,255,1) 0%,
    rgba(217,81,255,1) 50%, rgba(67,75,255,1) 100%);
  --grad-red: linear-gradient(135deg, rgba(238,255,51,1) 0%,
    rgba(255,40,40,1) 50%, rgba(255,124,46,1) 100%);
  --slim-box-shadow: 0 1px 2px;
  --wide-box-shadow: 0 2px 4px 2px;
  --player-height: 4.5em;
  --header-height: 4em;
}

a, button, figcaption {
  all: unset;
  cursor: pointer;
}

h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin: .75em 2em;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.3em;
    margin: 1em .7em 0 0;
    font-weight: bold;
}
h4 {
    display: block;
    margin: 1em .7em 0 0;
    font-weight: bold;
}
h5 {
    display: block;
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
h6 {
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
</style>
