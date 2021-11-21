<template>
  <div id="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
};
</script>

<style scoped>
#main-container {
  padding-top: 10vh;
  align-items: center;
  height: calc(100vh - var(--header-height));
  max-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  gap: 3em;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#main-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}
</style>
