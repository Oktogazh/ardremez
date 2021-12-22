<template>
  <form @submit.prevent="verify">
    <BasicInput type="password" @input="setValue"
      :placeholder="translate.placeholderPsw"/>
    <BasicInput type="password" @input="setValue"
      :placeholder="translate.placeholderPsw"/>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import BasicInput from '@/atoms/forms/BasicInput.vue';

export default {
  name: 'SignInForm',
  components: {
    BasicInput,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  methods: {
    verify() {
      return null;
    },
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
