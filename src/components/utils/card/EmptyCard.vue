<template>
  <div class="card-section">
    <div id="before">
      <slot name="before"></slot>
    </div>
    <div class="card-container">
      <!-- block the method if togglable is false -->
      <CardTitle @toggle="togglable && toggleBody()">
        <slot name="title"></slot>
      </CardTitle>
      <CardBody v-show="isOpen">
        <slot name="body"></slot>
      </CardBody>
    </div>
    <div id="after">
      <slot name="after"></slot>
    </div>
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
      isOpen: this.startOpen,
    };
  },
  methods: {
    toggleBody() {
      this.isOpen = !this.isOpen;
    },
  },
  props: {
    startOpen: {
      type: Boolean,
      default: true,
    },
    togglable: {
      type: Boolean,
      default: true,
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
  box-shadow: var(--slim-shadow-box);
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.card-container:-webkit-scrollbar {
    display: none; /* Other browsers */
}

#before {
  flex-grow: 1;
}

#after {
  flex-grow: 2;
}
</style>
