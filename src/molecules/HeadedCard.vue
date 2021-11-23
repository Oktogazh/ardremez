<template>
  <Card :pad="pad" :extend="extend">
    <div class="header-container">
      <slot name="header" :toggle="toggleBody" :bodyOpen="bodyOpen" :pad="pad">
      </slot>
    </div>
    <div class="body" v-show="bodyOpen">
      <slot name="body"></slot>
    </div>
  </Card>
</template>

<script>
import Card from '@/atoms/Card.vue';

export default {
  name: 'HeadedCard',
  components: {
    Card,
  },
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
    extend: {
      type: Boolean,
      required: false,
      default: false,
    },
    pad: {
      required: false,
      default: '0em',
    },
    open: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.header-container {
  flex: 0 0 auto;
  border-bottom: solid 1px var(--lighter-black);
}

.body {
  padding: .5em 5%;
  flex: 0 1 auto;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.body:-webkit-scrollbar {
    display: none; /* Other browsers */
}
</style>
