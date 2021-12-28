<template>
  <div class="key-value-container" v-if="condition">
    <div class="key-container">
      <button>
        <h4 v-html="keyTitle" @click="action"></h4>
      </button>
    </div>
    <div class="value-container">
      <h5 v-html="value"></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyValuePair',
  props: {
    keyTitle: String,
    value: String,
    action: {
      required: false,
      default: null,
    },
    condition: {
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
* {
  margin: 2px .2em;
}

.key-value-container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
  align-items: baseline;
  justify-content: space-between;
}

</style>
