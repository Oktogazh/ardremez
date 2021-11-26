<template>
  <span v-html="time"></span>
</template>

<script>
export default {
  name: 'TimeInfo',
  computed: {
    time() {
      function calcHours(hrs, m) {
        if (hrs > 0) {
          if (m > 10) return `${hrs}:`;
          return `${hrs}:0`;
        }
        return '';
      }
      const { seconds } = this;
      const secs = Math.floor(seconds % 60);
      const mins = Math.floor(seconds / 60);
      const m = Math.floor(mins % 60);
      const hrs = Math.floor(mins / 60);
      const h = calcHours(hrs, m);
      const s = (secs > 9) ? secs : `0${secs}`;

      return `${h}${m}:${s}`;
    },
  },
  props: {
    seconds: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
</style>
