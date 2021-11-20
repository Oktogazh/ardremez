<template>
  <div id="main-container">
    <div id="inner-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
};
</script>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  flex: 1 1 auto;
  overflow-y: hide;
}

#inner-container {
  border: solid 1px black;
  min-height: 90%;
}
</style>
