<template>
  <div class="header-container">
    <h1>Home</h1>

    <MenuButton />
  </div>
</template>

<script>
import MenuButton from '@/components/main/MenuButton.vue';

export default {
  name: 'Header',
  components: {
    MenuButton,
  },
};
</script>

<style scoped>
.header-container {
}
</style>
