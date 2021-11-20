<template>
  <div id="flex-responsive">
    <div  v-for="(card, index) in chapter.cards" :key="index"
      :class="[(index == selected)? 'active': '', 'card-header']">
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
    selected: {
      required: true, // default: 0,
    },
  },
};
</script>

<style scoped>
#flex-responsive {
  display: flex;
  justify-content: space-around;
}

.card-header {
  flex: 1 0 auto;
  background: var(--todo-background);
  text-align: center;
}

.active {
  color: white;
}
</style>
