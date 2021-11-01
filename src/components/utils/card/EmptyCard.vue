<template>
  <div class="card-container">
    <CardTitle @toogle="toogleBody">
      <slot name="title"></slot>
    </CardTitle>
    <CardBody v-show="collapsedBody">
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
      collapsedBody: true, // TODO: Make this a prop instead
    };
  },
  methods: {
    toogleBody() {
      this.collapsedBody = !this.collapsedBody;
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 900px;
  max-width: 100%;
}
</style>
