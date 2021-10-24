<template>
  <div class="darker" @click="close()">
    <div class="modal" v-bind:style="{ backgroundImage: 'url(' + background + ')' }" @click.stop>
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
  /**
  *  If a uri is given, it will be displayed as the modal background,
  * which is white otherwise.
  */
  props: ['background'],
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  padding: 5%;
  border-radius: 2rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(65, 85, 144, 0.65);
}
</style>
