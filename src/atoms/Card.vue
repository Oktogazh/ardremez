<template>
  <div :class="[extend? 'extend': '', 'card-container']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
    };
  },
  props: {
    extend: {
      required: false,
      default: false,
    },
    pad: {
      required: false,
      default: '0em',
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  width: 900px;
  max-width: calc(100% - 2 *  v-bind(pad));
  height: auto;
  padding-left: v-bind(pad);
  padding-right: v-bind(pad);
  max-height: calc(90vh - var(--player-height) - var(--header-height));
  display: flex;
  flex-direction: column;
  background: var(--card-background);
  box-shadow: var(--slim-box-shadow) var(--middle-black);
  border-radius: 9px 9px 0 0;
  overflow: hidden;
}

@media only screen and (max-width: 650px) {
  .extend {
    height: 100%;
  }
}
</style>
