<template>
  <div id="flex-responsive">
    <div  v-for="(card, index) in chapter.cards" :key="index"
      :class="[(index == selected)? 'active': '', 'card-header']"
      @click="$emit('selecting', index)">
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
  gap: 3em;
}

.card-header {
  flex: 1 0 auto;
  text-align: center;
  cursor: pointer;
}

.active {
  font-weight: 600;
  border-bottom: solid 3px black;
}
</style>
