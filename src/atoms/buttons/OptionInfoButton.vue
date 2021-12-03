<template>
  <div class="">
    {{ price }}
  </div>
</template>

<script>
export default {
  name: 'OptionInfoButton',
  computed: {
    price() {
      let price = '';
      if (this.info.currency === 'eur') {
        price += `${this.info.unit_amount / 100} €`;
      }
      return price;
    },
  },
  mounted() {
  },
  props: {
    selected: {
      required: true,
    },
    info: {
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
