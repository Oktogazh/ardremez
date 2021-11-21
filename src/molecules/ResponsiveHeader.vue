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
  flex-wrap: wrap;
  gap: 0 3em;
}

.card-header {
  padding: 1em 0;
  width: calc(1/3 - 2em);
  flex: 1 1 auto;
  text-align: center;
  cursor: pointer;
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
