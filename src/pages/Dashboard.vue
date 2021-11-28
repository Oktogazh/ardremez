<template>
  <div class="flex-dashboard">
    <div id="setting" class="flex-item">
      <SettingCard />
    </div>
    <div id="progressions" class="flex-item">
      <Progressions />
    </div>
  </div>
</template>

<script>
import SettingCard from '@/organisms/SettingCard.vue';
import Progressions from '@/organisms/Progressions.vue';

export default {
  name: 'Account',
  components: {
    SettingCard,
    Progressions,
  },
  created() {
    this.$store.commit('app/SET_TITLES', { title: 'My_Account' });
  },
};
</script>

<style scoped>
.flex-dashboard {
  display: flex;
  width: stretch;
  height: stretch;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 3em;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding: 1.5em;
}
#flex-dashboard:-webkit-scrollbar {
  display: none; /* Other browsers */
}

.flex-item {
  width: calc(50% - 3em);
  min-width: 500px;
}

@media only screen and (max-width: 500px) {
  .flex-item {
    min-width: 100%;
  }
}
</style>
