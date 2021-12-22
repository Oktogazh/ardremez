<template>
  <FormContainer @submit.prevent="verify">
    <BasicInput type="password" @input="setPswValue"
      :placeholder="translate.placeholderPsw"/>
    <BasicInput type="password" @input="setCnfrmValue"
      :placeholder="translate.Confirm_Psw"/>
    <SubmitButton />
  </FormContainer>
</template>

<script>
import { mapState } from 'vuex';
import FormContainer from '@/atoms/forms/FormContainer.vue';
import BasicInput from '@/atoms/forms/BasicInput.vue';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'NewPswForm',
  components: {
    BasicInput,
    FormContainer,
    SubmitButton,
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
      psw: '',
      confirm: '',
    };
  },
  methods: {
    setPswValue({ target }) {
      this.psw = target.value;
    },
    setCnfrmValue({ target }) {
      this.confirm = target.value;
    },
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
