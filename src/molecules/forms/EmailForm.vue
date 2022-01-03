<template>
  <FormContainer @submit.prevent="next">
    <slot name="instructions"></slot>
    <BasicInput id="email" type="email" @input="setValue" required
      placeholder="ann@vreizh.bzh" title=""/>
    <SubmitButton text="Continue" />
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
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
      email: '',
      loading: false,
    };
  },
  methods: {
    init() {
      const email = document.getElementById('email');
      email.value = '';
    },
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
