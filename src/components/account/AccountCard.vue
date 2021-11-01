<template>
  <EmptyCard>
    <template v-slot:title>
      {{ $store.state.lang.Manage_My_Account }}
    </template>
    <template v-slot:body>
      <ul>
        <li id="delete-account">
          {{ $store.state.lang.Delete_My_Account }}
        </li>
      </ul>
    </template>
  </EmptyCard>
</template>

<script>
import EmptyCard from '@/components/utils/card/EmptyCard.vue';

export default {
  name: 'Account',
  components: {
    EmptyCard,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
ul {
  all: unset;
  list-style: none;
}

li {
  cursor: pointer;
}
</style>
