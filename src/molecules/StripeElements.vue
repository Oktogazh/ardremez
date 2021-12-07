<template>
  <div id="back" >
    <button id="back-btn" @click="$emit('back')" v-html="'&#11207;'"></button>
  </div>
  <form id="payment-form">
    <div id="card-number-element">
      <!-- Elements will create input elements here -->
    </div>
    <div id="card-expiry-element">
      <!-- Elements will create input elements here -->
    </div>
    <div id="card-cvc-element">
      <!-- Elements will create input elements here -->
    </div>
    <div id="zip-code">
      <input type="" name="" value="">
    </div>

    <!-- We'll put the error messages in this element -->
    <div id="card-errors" role="alert"></div>

    <button id="submit">Submit Payment</button>
  </form>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ElementsCheckout',
  computed: {
    ...mapState({
      api: (state) => state.api,
      translate: (state) => state.lang,
      user: (state) => state.user,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    createSubscription() {
      const { customerId } = this.user;
      const { priceId } = this;

      window.axios.post(`${this.api}/api/create-subscription`, { customerId, priceId });
    },
  },
  mounted() {
    this.createSubscription();
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK);
    this.elements = this.stripe.elements();
    this.style = {
      base: {
        color: '#32325d',
      },
    };

    this.cardNumber = this.elements.create('cardNumber', { style: this.style });
    this.cardNumber.mount('#card-number-element');

    this.cardExpiry = this.elements.create('cardExpiry', { style: this.style });
    this.cardExpiry.mount('#card-expiry-element');

    this.cardCvc = this.elements.create('cardCvc', { style: this.style });
    this.cardCvc.mount('#card-cvc-element');

    this.cardNumber.on('change', ({ error }) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = this.translate[error.code];
      } else {
        displayError.textContent = '';
      }
    });
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
