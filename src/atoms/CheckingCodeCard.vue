<template>
  <HeadedCard :togglable="false">
    <template v-slot:title>
      {{ $store.state.lang.Enter_Your_Code_Here }}
    </template>
    <template  v-slot:body>
      <form  class="code-form" @submit.prevent="$emit('sendCode', code)">
        <input type="text" v-model="code" maxlength="6">
        <SubmitButton />
      </form>
    </template>
  </HeadedCard>
</template>

<script>
import SubmitButton from '@/atoms/buttons/SubmitButton.vue';
import HeadedCard from '@/molecules/HeadedCard.vue';

export default {
  name: 'CheckingCodeCard',
  components: {
    HeadedCard,
    SubmitButton,
  },
  data() {
    return {
      code: '',
    };
  },
  watch: {
    code() {
      this.code = this.code.toUpperCase();
    },
  },
};
</script>

<style scoped>
.code-form {
  padding: 1vmax;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1em;
}

input {
  display: block;
  width: 8em;
  font-size: 180%;
  text-align: center;
  letter-spacing: .35em;
}

h4 {
  margin: 1em 2em;
}
</style>
