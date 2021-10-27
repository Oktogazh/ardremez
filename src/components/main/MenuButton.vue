<template>
  <button @click="dropDown" id="menuButton">
    <h1>Ξ</h1>
  </button>
  <Menu v-if="open" />
</template>

<script>
import Menu from '@/components/main/menu/Menu.vue';

export default {
  name: 'MenuButton',
  data() {
    return {
      open: false,
    };
  },
  components: {
    Menu,
  },
  methods: {
    dropDown() {
      this.open = true;
    },
  },
};
</script>

<style scoped>
#menuButton {
  all: unset;
  position: absolute;
  right: 3rem;
  top: 4rem;
  cursor: pointer;
}
</style>
