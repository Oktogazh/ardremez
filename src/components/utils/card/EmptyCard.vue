<template>
  <div class="card-section">
    <div id="before">
      <slot name="before"></slot>
    </div>
    <div class="card-container">
      <div class="header-container">
        <slot name="header" :toggle="toggleBody" :bodyOpen="bodyOpen"></slot>
      </div>
      <CardBody v-show="bodyOpen">
        <slot name="body"></slot>
      </CardBody>
    </div>
    <div id="after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
import CardBody from './CardBody.vue';

export default {
  name: 'EmptyCard',
  components: {
    CardBody,
  },
  data() {
    return {
      bodyOpen: true,
    };
  },
  methods: {
    toggleBody() {
      this.bodyOpen = !this.bodyOpen;
    },
  },
};
</script>

<style scoped>
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

#before {
  flex-grow: 1;
}

#after {
  flex-grow: 1;
}
</style>
