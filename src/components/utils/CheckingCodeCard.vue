<template>
  <EmptyCard :togglable="false">
    <template v-slot:title>
      {{ $store.state.lang.Enter_Your_Code_Here }}
    </template>
    <template  v-slot:body>
      <form  class="code-form" @submit.prevent="$emit('submit', code)">
        <input type="text" v-model="code" maxlength="6">
        <button type="submit">
          <h4>{{ $store.state.lang.Submit }}</h4>
        </button>
      </form>
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'CheckingCodeCard',
  components: {
    EmptyCard,
  },
  data() {
    return {
      code: '',
    };
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
  width: 6em;
  font-size: 200%;
  text-align: center;
  letter-spacing: .35em;
}

h4 {
  margin: 1em 2em;
}
</style>
