<template>
    <div class="darker flexbox-center" @click="close()">
      <div @click.stop class="flexbox-center">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      return this.$emit('closing');
    },
  },
  // If a uri is given, it will be displayed as the modal background,
  // which is white otherwise.
  props: ['background'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.darker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.flexbox-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
