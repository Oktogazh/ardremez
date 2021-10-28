<template>
  <div @click="dropDown">
    <button id="menuButton">
      <h1>Ξ</h1>
    </button>
    <MenuOptions v-if="menuOptions" @openOption="opening" />
  </div>
  <Access v-if="options.accessPortal" @closing="closing('accessPortal')" />
</template>

<script>
import MenuOptions from '@/components/main/menu/MenuOptions.vue';
import Access from '@/components/auth/Access.vue';

export default {
  name: 'MenuButton',
  data() {
    return {
      menuOptions: false,
      options: {
        accessPortal: false,
      },
    };
  },
  components: {
    MenuOptions,
    Access,
  },
  methods: {
    dropDown() {
      this.menuOptions = !this.menuOptions;
    },
    opening(option) {
      this.options[option] = true;
    },
    closing(option) {
      this.options[option] = false;
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
