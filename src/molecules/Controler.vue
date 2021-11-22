<template >
  <div class="">
    <Download :size="'1em'" />
  </div>
</template>

<script>
import Download from '@/atoms/actions/Download.vue';

export default {
  name: 'Controler',
  components: {
    Download,
  },
};
</script>

<style scoped>
</style>
