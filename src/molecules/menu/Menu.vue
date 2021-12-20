<template>
  <div>
    <button id="menuButton" @click="dropDown">
      <h1>Ξ</h1>
    </button>
    <div id="dropDownMenu">
      <MenuOptions v-if="menuOptions"
        @close="menuOptions = false"
        @openOption="opening" />
      <OtherLanguages v-if="options.languagesMenu" @closing="closing" />
    </div>
  </div>
</template>

<script>
import MenuOptions from '@/molecules/menu/MenuOptions.vue';
import OtherLanguages from '@/molecules/menu/OtherLanguages.vue';

export default {
  name: 'MenuButton',
  data() {
    return {
      menuOptions: false,
      options: {
        accessPortal: false,
        languagesMenu: false,
      },
    };
  },
  components: {
    MenuOptions,
    OtherLanguages,
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
  cursor: pointer;
}

#dropDownMenu {
  position: absolute;
  width: content;
  right: 3rem;
  top: var(--header-height);
  background-color: rgba(97, 97, 97, 0.5);
  z-index: 1;
}
</style>
