<template>
  <div class="header-container">
    <div class="titles-container">
      <div class="title">
        <h1>Home</h1>
      </div>
    </div>

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(127, 105, 154);
}

.titles-container {
  left: 0px;
}
</style>
