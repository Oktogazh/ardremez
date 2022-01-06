<template>
  <p class="petite-caps" v-html="text"></p>
</template>

<script>
export default {
  name: 'PetiteCaps',
  props: {
    text: {
      required: true,
      type: Text,
    },
  },
};
</script>

<style scoped>
.petite-caps {
  width: max-content;
  padding: 0 2em;
  font-size: 11px;
  color: var(--dark-black);
  text-transform: uppercase;
  font-weight: 800;
  font-variant-caps: all-petite-caps;
}
</style>
