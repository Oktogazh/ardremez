<template>
  <div class="card-container">
    <!-- block the method if togglable is false -->
    <CardTitle @toggle="togglable && toggleBody()">
      <slot name="title"></slot>
    </CardTitle>
    <CardBody v-show="isOpen">
      <slot name="body"></slot>
    </CardBody>
  </div>
</template>

<script>
import CardTitle from './CardTitle.vue';
import CardBody from './CardBody.vue';

export default {
  name: 'EmptyCard',
  components: {
    CardTitle,
    CardBody,
  },
  data() {
    return {
      isOpen: this.startOpen,
    };
  },
  methods: {
    toggleBody() {
      this.isOpen = !this.isOpen;
    },
  },
  props: {
    startOpen: {
      type: Boolean,
      default: true,
    },
    togglable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 900px;
  max-width: 100%;
  box-shadow: var(--slim-shadow-box);
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.card-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}
</style>
