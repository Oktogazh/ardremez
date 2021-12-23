<template>
  <div>
    <button v-html="translate.Back"></button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GoBack',
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
};
</script>

<style scoped>
div {
  width: stretch;
  padding: 13px;
}
</style>
