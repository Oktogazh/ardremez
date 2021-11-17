<template>
  <div class="small-button" @click="$emit('clicked')"
    v-html="text">
  </div>
</template>

<script>
export default {
  name: 'SmallButton',
  data() {
    return {
      background: `var(--${this.bg})`,
    };
  },
  props: {
    bg: {
      required: true,
    },
    text: {
      required: true,
    },
  },
};
</script>

<style scoped>
.small-button {
  width: max-content;
  padding: 0 2em;
  font-size: 11px;
  color: var(--lighter-white);
  text-transform: uppercase;
  font-weight: 800;
  font-variant-caps: all-petite-caps;
  border-radius: 1em;
  padding: 3px 6px;
  cursor: pointer;
  opacity: .7;
  margin: 0 3em;
  background: v-bind(background);
}
.small-button:hover {
  opacity: .9;
  box-shadow: var(--slim-box-shadow)  var(--dark-black);
}

</style>
