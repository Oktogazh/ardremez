<template>
  <div id="back" >
    <button id="back-btn" @click="$emit('back')" v-html="'&#11207;'"></button>
  </div>
  <form id="payment-form">
    <div id="payment-element">
      <!-- Elements will create form elements here -->
    </div>
    <SubmitButton text="Subscribe" @click.prevent="confirmPayment" />
    <div id="error-message">
      <!-- Display error message to your customers here -->
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'ElementsCheckout',
  components: {
    SubmitButton,
  },
  computed: {
    ...mapState({
      api: (state) => state.api,
      translate: (state) => state.lang,
      user: (state) => state.user,
      productId: (state) => state.payment.product.productId,
    }),
  },
  data() {
    return {
      clientSecret: null,
    };
  },
  methods: {
    async confirmPayment() {
      const { error } = await this.stripe.confirmPayment({
        // `Elements` instance that was used to create the Payment Element
        elements: this.elements,
        confirmParams: {
          return_url: `${window.location.origin}?prod_id=${this.productId}#/dashboard`,
        },
      });

      if (error) {
        const messageContainer = document.querySelector('#error-message');
        messageContainer.textContent = this.translate[error.code];
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    },
    async createSubscription() {
      const { customerId } = this.user;
      const { priceId } = this;
      const uri = `${this.api}/api/create-subscription`;

      const data = await window.axios.post(uri,
        { customerId, priceId })
        .then((res) => res.data);

      return data;
    },
    async mountElements({ clientSecret }) {
      const options = {
        clientSecret,
      };

      this.elements = this.stripe.elements(options);
      const paymentElement = this.elements.create('payment');
      paymentElement.mount('#payment-element');
    },
  },
  mounted() {
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK);

    this.createSubscription()
      .then(this.mountElements);
  },
  props: {
    priceId: String,
  },
};
</script>

<style scoped>
#back {
  width: 100%;
}

#back-btn {
  font-size: 1.2em;
  padding: 5px;
  color: rgb(87, 87, 87);
}

</style>
