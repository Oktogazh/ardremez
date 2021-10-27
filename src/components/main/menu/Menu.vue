<template>
  <div id="dropDownMenu">
    <ul>
      <li><Access /></li>
    </ul>
  </div>
</template>

<script>
import Access from '@/components/auth/Access.vue';

export default {
  name: 'Menu',
  components: {
    Access,
  },
  methods: {
    close() {
      this.$parent.open = false;
      console.log(this.$parent.open);
    },
  },
  mounted() {
    document.addEventListener('click', () => alert('sup!'));
  },
  beforeUnmount() {
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
</style>
