<template>
  <div class="darker" @click="close()">
    <div class="modal" @click.stop>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.darker {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.modal {
  display: block;
  position: absolute;
  margin: auto;
  margin: 3rem;
  border-radius: 1rem;
  background-color: white;
}
</style>
