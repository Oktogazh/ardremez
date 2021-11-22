<template>
  <div>
    <TimeInfo />
    <TimeInfo />
  </div>
</template>

<script>
import TimeInfo from '@/atoms/TimeInfo.vue';

export default {
  name: 'Progression',
  components: {
    TimeInfo,
  },
};
</script>

<style lang="css" scoped>
</style>
