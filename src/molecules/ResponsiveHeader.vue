<template>
  <div id="flex-responsive">
    <div  v-for="(card, index) in chapter.cards" :key="index">
      {{ card.data.header }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveHeader',
  props: {
    chapter: {
      required: true,
    },
  },
};
</script>

<style scoped>
#flex-responsive {
  display: flex;
  justify-content: space-around;
}
</style>
