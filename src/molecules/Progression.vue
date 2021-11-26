<template>
  <div id="time-info">
    <TimeInfo />
    <TimeInfo :seconds="duration" />
  </div>
</template>

<script>
import TimeInfo from '@/atoms/TimeInfo.vue';

export default {
  name: 'Progression',
  components: {
    TimeInfo,
  },
  props: {
    duration: {
      required: true,
      type: Number,
    },
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
