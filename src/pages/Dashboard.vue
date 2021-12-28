<template>
  <CheckoutCarousel v-if="product !== null" :product="product" />
  <div class="flex-dashboard">
    <div id="setting" class="flex-item">
      <SettingCard />
    </div>
    <div id="progressions" class="flex-item">
      <Progressions />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import swal from 'sweetalert2';
import CheckoutCarousel from '@/organisms/CheckoutCarousel.vue';
import SettingCard from '@/organisms/SettingCard.vue';
import Progressions from '@/organisms/Progressions.vue';

export default {
  name: 'Account',
  components: {
    CheckoutCarousel,
    SettingCard,
    Progressions,
  },
  created() {
    this.$store.dispatch('app/updateAppState', { title: 'My_Account', subtitle: null });
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
      product: (state) => state.payment.product,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    checkIfLoggedIn({ address, newpsw }) {
      const { $store } = this;
      if (!$store.getters['user/connected']) {
        const params = {
          logging: true,
          redirect: '/',
          from: 'checkIfLoggedIn',
        };

        $store.dispatch('user/setUserData', { email: address, emailCode: newpsw })
          .then($store.dispatch('app/logStatusAndRoute', params))
          .then(window.history.replaceState({}, document.title, '/#/dashboard'));
      }
    },
    completePayment({ status, productId }) {
      // TODO: swal.fire a message,
      // add this product to the subsciptions,
      // shift in a new progress object if not in the user.progress
      switch (status) {
        case 'succeeded':
          // update the user's state,
          // inform the user and
          // delete the query params
          this.$store.dispatch('user/updateSubscription', { productId, status: 'active' });
          swal.fire({
            icon: 'success',
            html: this.translate.PaymentSuccessfulyProcessedMsg,
          });

          window.history.replaceState({}, document.title, '/#/dashboard');
          break;
        case 'processing':
          break;

        case 'requires_payment_method':
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          break;

        default:
          // message.innerText = 'Something went wrong.';
          break;
      }
      return { status, productId };
    },
    getStatus({ clientSecret, status, productId }) {
      if (status) {
        this.completePayment({ status, productId });
      } else {
        const stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK);
        const self = this;

        stripe.retrievePaymentIntent(clientSecret)
          .then(({ paymentIntent }) => {
            const newStatus = paymentIntent.status;
            self.completePayment({ status: newStatus, productId });
          });
      }
    },
    queryParams() {
      const address = new URLSearchParams(window.location.search).get(
        'address',
      );
      const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret',
      );
      const newpsw = new URLSearchParams(window.location.search).get(
        'newpsw',
      );
      const productId = new URLSearchParams(window.location.search).get(
        'prod_id',
      );
      const status = new URLSearchParams(window.location.search).get(
        'redirect_status',
      );
      return {
        address,
        clientSecret,
        productId,
        newpsw,
        status,
      };
    },
    subscribeTo(product) {
      if (!this.$store.state.user.customerId) { // dashboard watch $route
        swal.fire({ html: this.translate.NeedaBeVerifiedToSub });
      } else {
        this.product = product;
      }
    },
  },
  mounted() {
    const { product } = this.$store.state.payment;
    const {
      address,
      clientSecret,
      productId,
      newpsw,
      status,
    } = this.queryParams();

    this.checkIfLoggedIn({ address, newpsw });

    if (clientSecret) this.getStatus({ clientSecret, status, productId });
    else if (product) this.subscribeTo(product);
  },
  watch: {
    $route() {
      this.queryParams();
    },
  },
};
</script>

<style scoped>
.flex-dashboard {
  display: flex;
  width: stretch;
  height: stretch;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 1em;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding: 2em;
}
#flex-dashboard:-webkit-scrollbar {
  display: none; /* Other browsers */
}

.flex-item {
  width: calc(50% - 3em);
  min-width: calc(500px - 3em);
  display: flex;
  flex-flow: column;
  align-items: center;
}

@media only screen and (max-width: 1000px) {
  .flex-item {
    min-width: 100%;
  }
}
</style>
