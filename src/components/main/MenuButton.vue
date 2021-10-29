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
  <Access v-if="options.accessPortal" @closing="closing" />
</template>

<script>
import MenuOptions from '@/components/main/menu/MenuOptions.vue';
import Access from '@/components/auth/Access.vue';
import OtherLanguages from '@/components/main/menu/OtherLanguages.vue';

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
    Access,
    OtherLanguages,
  },
  methods: {
    dropDown() {
      this.menuOptions = !this.menuOptions;
    },
    opening(option) {
      // this.menuOptions = false;
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

#dropDownMenu {
  position: absolute;
  width: 10%;
  right: 3rem;
  padding: 0px;
  background-color: rgba(97, 97, 97, 0.5);
}
</style>
