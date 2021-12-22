<template>
  <input v-bind="value" />
</template>

<script>
export default {
  name: 'BasicInput',
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style scoped>
input {
  background-color: rgba(247, 247, 202, 0.9);
  border-radius: 10rem;
  margin-bottom: .8rem;
  border: 0;
  padding: 1rem;
}
</style>
