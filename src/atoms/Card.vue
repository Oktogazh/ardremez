<template>
  <div class="card-container">
    <div class="header-container">
      <slot name="header" :toggle="toggleBody" :bodyOpen="bodyOpen" :pad="pad">
      </slot>
    </div>
    <div class="body" v-show="bodyOpen">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
  },
  data() {
    return {
      bodyOpen: this.open,
    };
  },
  methods: {
    toggleBody() {
      this.bodyOpen = !this.bodyOpen;
    },
  },
  props: {
    pad: {
      required: false,
      default: '0em',
    },
    open: {
      type: Boolean,
      required: false,
      default: true,
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
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}

.header-container {
  flex: 1 0 auto;
  border-bottom: solid 1px var(--lighter-black);
}

.body {
  flex: 0 1 auto;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.body:-webkit-scrollbar {
    display: none; /* Other browsers */
}
</style>
