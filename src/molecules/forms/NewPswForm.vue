<template>
  <FormContainer @submit.prevent="verify">
    <BasicInput type="password" @input="setPswValue"
      :placeholder="translate.placeholderPsw" required />
    <BasicInput type="password" @input="setCnfrmValue"
      :placeholder="translate.Confirm_Psw" required />
    <SubmitButton />
  </FormContainer>
</template>

<script>
import swal from 'sweetalert2';
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
      const { psw, confirm } = this;
      if (psw !== confirm) {
        swal.fire({
          icon: 'error',
          html: this.translate.Not_the_same_psws,
        });
        this.psw = '';
        this.confirm = '';
      } else if (this.psw.length < 8) {
        // TODO: show this as newcomers type their password in the first place
        // TODO: compute password strength
        swal.fire(this.translate.minimum_length_required);
      } else {
        this.$emit('pwdApproved', psw);
      }
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
