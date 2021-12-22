<template>
  <FormContainer @submit.prevent="next">
    <BasicInput type="email" @input="setValue" required
      placeholder="ann@vreizh.bzh" title=""/>
    <SubmitButton />
  </FormContainer>
</template>

<script>
import { mapState } from 'vuex';
import FormContainer from '@/atoms/forms/FormContainer.vue';
import BasicInput from '@/atoms/forms/BasicInput.vue';
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';

export default {
  name: 'EmailForm',
  components: {
    BasicInput,
    FormContainer,
    SubmitButton,
  },
  computed: {
    ...mapState({
      api: (state) => state.api,
    }),
  },
  data() {
    return {
      email: '',
      loading: false,
    };
  },
  methods: {
    setValue({ target }) {
      this.email = target.value;
    },
    async next() {
      this.loading = true;
      const { email } = this;
      // TODO: '/ezel' → '/member' (in the api)
      this.loading = await window.axios.post(`${this.api}/api/ezel`, { email: this.email })
        .then((res) => res.data.ezel)
        .then((member) => this.$emit('next', { email, member }))
        .then(() => false);
    },
  },
};
</script>
