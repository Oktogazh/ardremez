<template>
  <div id="flex-responsive">
    <div  v-for="(card, index) in chapter.cards" :key="index"
      :class="[(index == selected)? 'active': '', 'card-header']"
      @click="$emit('selecting', index)" :id="`header-${index}`">
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
    pad: {
      required: false,
      default: '0em',
    },
  },
};
</script>

<style scoped>
#flex-responsive {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 v-bind(pad);
}

.card-header {
  padding: 1em 0;
  width: 0;
  flex: 1 0 auto;
  text-align: center;
  cursor: pointer;
  border-bottom: solid 3px transparent;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.card-header:-webkit-scrollbar {
    display: none; /* Other browsers */
}
.card-header:hover {
  border-bottom: solid 3px var(--middle-black);
}

.active {
  font-weight: 600;
  border-bottom: solid 3px black;
}
.active:hover {
border-bottom: solid 3px black;
}
</style>
