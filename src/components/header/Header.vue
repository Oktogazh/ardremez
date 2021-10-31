<template>
  <div class="header-container">
    <Titles />
    <MenuButton />
  </div>
</template>

<script>
import Titles from '@/components/header/Titles.vue';
import MenuButton from '@/components/header/menu/MenuButton.vue';

export default {
  name: 'Header',
  components: {
    MenuButton,
    Titles,
  },
};
</script>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

>>> h1 {
  margin: 0;
  padding: 1rem;
}
</style>
