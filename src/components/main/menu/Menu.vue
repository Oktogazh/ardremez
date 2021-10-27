<template>
  <div id="dropDownMenu">
    <ul>
      <li @click="$emit('goTo', 'accessPortal')"><h3>Access</h3></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  components: {
  },
  methods: {
    close(e) {
      if (!this.$parent.$el.contains(e.target)) {
        this.$parent.open = false;
      }
    },
  },
  mounted() {
    const delay = (ms) => new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });

    // if not delayed, the click mounting the component triggers the listener
    delay(250)
      .then(() => document.addEventListener('click', this.close));
  },
  beforeUnmount() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style scoped>
#dropDownMenu {
  position: absolute;
  width: 10%;
  right: 3rem;
  padding: 0px;
  background-color: rgba(97, 97, 97, 0.5);
}

ul {
  list-style: none;
}

li {
  cursor: pointer;
}
</style>
