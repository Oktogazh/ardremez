<template>
  <div class="card-section">
    <div class="card-container">
      <div class="header-container">
        <slot name="header" :toggle="toggleBody" :bodyOpen="bodyOpen"></slot>
      </div>
      <div class="body" v-show="bodyOpen">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyCard',
  data() {
    return {
      bodyOpen: this.open,
    };
  },
  methods: {
    toggleBody() {
      this.bodyOpen = !this.bodyOpen;
    },
  },
  props: {
    open: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.body {
  padding: 1em;
}

.card-section {
  display: flex;
  justify-content: center;
}

.card-container {
  width: 900px;
  max-width: 100%;
  background-color: var(--card-background);
  box-shadow: var(--slim-box-shadow) var(--middle-black);
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.card-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}

.header-container {
  border-bottom: solid 1px var(--lighter-black);
}
</style>
