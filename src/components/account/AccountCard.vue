<template>
  <EmptyCard>
    <template v-slot:title>
      {{ $store.state.lang.Manage_My_Account }}
    </template>
    <template v-slot:body>
      <ul>
        <li id="delete-account"  @click="deleteAccount">
          {{ $store.state.lang.Delete_My_Account }}
        </li>
      </ul>
    </template>
  </EmptyCard>
</template>

<script>
import swal from 'sweetalert2';
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
  methods: {
    deleteAccount() {
      const self = this;

      if (this.$store.state.user.subscriptionActive) {
        swal.fire({ // TODO: Translate!!
          text: 'Vous devez résilier votre abonnement avant de supprimer votre compte !',
        });
      } else {
        this.$store.dispatch('user/deleteAccount')
          .then(self.$router.push({ path: '/' }))
          .catch((e) => console.error(e));
      }
    },
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
