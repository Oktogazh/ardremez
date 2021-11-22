<template>
  <div id="time-info">
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

<style scoped>
#time-info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
