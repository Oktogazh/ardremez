<template>
  <div id="time-info">
    <TimeInfo :seconds="currentTime"/>
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
    currentTime: {
      required: true,
      type: Number,
    },
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
