<template>
  <FormContainer @submit.prevent="verify">
    <h4 v-html="email"></h4>
    <p :class="[null, 'error'][this.code]" v-html="msgArray[this.code]"></p>
    <BasicInput type="password" @input="setValue"
      :placeholder="translate.placeholderPsw"/>
      <slot name="option"></slot>
    <SubmitButton />
  </FormContainer>
</template>

<script>
import { mapState } from 'vuex';
import FormContainer from '@/atoms/forms/FormContainer.vue';
import BasicInput from '@/atoms/forms/BasicInput.vue';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'PasswordForm',
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
    msgArray() {
      return [
        this.translate.Enter_Your_Password,
        this.translate.Wrong_Password,
      ];
    },
  },
  components: {
    BasicInput,
    FormContainer,
    SubmitButton,
  },
  data() {
    return {
      code: 0,
      password: null,
    };
  },
  methods: {
    setValue({ target }) {
      this.password = target.value;
    },
    verify() {
      const { email, password } = this;

      this.$store.dispatch('user/logIn', { email, password })
        .then((isAuth) => {
          if (isAuth) this.$emit('authorized');
          else this.code = 1;
        });
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
.error {
  color: red;
}
</style>
