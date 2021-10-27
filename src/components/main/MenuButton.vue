<template>
  <div @click="dropDown">
    <button id="menuButton">
      <h1>Ξ</h1>
    </button>
    <Menu v-if="open" @goTo="goTo"/>
  </div>
  <Access v-if="accessPortal" @closing="closing('accessPortal')" />
</template>

<script>
import Menu from '@/components/main/menu/Menu.vue';
import Access from '@/components/auth/Access.vue';

export default {
  name: 'MenuButton',
  data() {
    return {
      open: false,
      accessPortal: false,
    };
  },
  components: {
    Menu,
    Access,
  },
  methods: {
    dropDown() {
      this.open = !this.open;
    },
    goTo(option) {
      this[option] = true;
    },
    closing(option) {
      this[option] = false;
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
