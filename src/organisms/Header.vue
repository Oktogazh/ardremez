<template>
  <div class="header-container">
    <Titles />
    <Menu />
  </div>
</template>

<script>
import Titles from '@/molecules/Titles.vue';
import Menu from '@/molecules/menu/Menu.vue';

export default {
  name: 'Header',
  components: {
    Menu,
    Titles,
  },
};
</script>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--lighter-black);
  max-height: var(--header-height);
}

:deep(h1) {
  margin: 0;
  padding: 1rem;
}
</style>
