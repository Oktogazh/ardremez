<template>
  <input :type="type" v-bind="value">
</template>

<script>
export default {
  name: 'BasicInput',
  data() {
    return {
      value: '',
    };
  },
  props: {
    type: String,
  },
};
</script>

<style scoped>
</style>
