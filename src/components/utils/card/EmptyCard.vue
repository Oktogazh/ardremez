<template>
  <div class="card-container">
    <CardTitle>
      <slot name="title"></slot>
    </CardTitle>
    <CardBody>
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
};
</script>

<style scoped>
.card-container {
}
</style>
