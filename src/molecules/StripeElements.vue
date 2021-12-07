<template>
  <div id="back" >
    <button id="back-btn" @click="$emit('back')" v-html="'&#11207;'"></button>
  </div>
  <form id="payment-form">
    <div id="payment-element">
      <!-- Elements will create form elements here -->
    </div>
    <button id="submit">Subscribe</button>
    <div id="error-message">
      <!-- Display error message to your customers here -->
    </div>
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
      subscriptionId: null,
      clientSecret: null,
    };
  },
  methods: {
    async createSubscription() {
      const { customerId } = this.user;
      const { priceId } = this;
      const uri = `${this.api}/api/create-subscription`;

      const data = await window.axios.post(uri,
        { customerId, priceId })
        .then((res) => res.data);

      return data;
    },
  },
  mounted() {
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK);

    this.createSubscription()
      .then(({ subscriptionId, clientSecret }) => {
        const options = {
          clientSecret,
        };

        const elements = this.stripe.elements(options);
        const paymentElement = elements.create('payment');
        paymentElement.mount('#payment-element');

        return subscriptionId;
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
