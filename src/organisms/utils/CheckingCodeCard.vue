<template>
  <HeadedCard :togglable="false">
    <template v-slot:title>
      {{ $store.state.lang.Enter_Your_Code_Here }}
    </template>
    <template  v-slot:body>
      <form  class="code-form" @submit.prevent="$emit('sendCode', code)">
        <input type="text" v-model="code" maxlength="6">
        <button type="submit">
          <h4>{{ $store.state.lang.Submit }}</h4>
        </button>
      </form>
    </template>
  </HeadedCard>
</template>

<script>
import HeadedCard from '@/molecules/HeadedCard.vue';

export default {
  name: 'CheckingCodeCard',
  components: {
    HeadedCard,
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
