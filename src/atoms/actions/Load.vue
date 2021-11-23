<template>
  <div :id="id" class="download-action">

  </div>
</template>

<script>
export default {
  name: 'Download',
  props: {
    angle: {
      required: false,
    },
    id: {
      required: true,
    },
    size: {
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.download-action {
  height: v-bind(size);
  width: v-bind(size);
  background: var(--todo-background);
}
</style>
