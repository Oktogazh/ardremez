<template>
  <div id="back" >
    <button id="back-btn" @click="$emit('back')" v-html="'&#11207;'"></button>
  </div>
</template>

<script>
export default {
  name: 'ElementsCheckout',
  mounted() { /*
    var stripe = Stripe(process.env.VUE_APP_STRIPE_PK);
    var elements = stripe.elements(); */
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
