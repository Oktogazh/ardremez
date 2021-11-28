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
    radius: {
      required: false,
      default: '0',
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  width: 850px;
  max-width: calc(100% - 2 *  v-bind(pad));
  height: auto;
  padding-left: v-bind(pad);
  padding-right: v-bind(pad);
  max-height: calc(90vh - var(--player-height) - var(--header-height));
  display: flex;
  flex-direction: column;
  background: var(--card-background);
  box-shadow: var(--slim-box-shadow) var(--middle-black);
  border-radius: v-bind(radius);
  overflow: hidden;
}

@media only screen and (max-width: 650px) {
  .extend {
    height: 100%;
  }
}
</style>
