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
import { mapState } from 'vuex';
import SettingCard from '@/organisms/SettingCard.vue';
import Progressions from '@/organisms/Progressions.vue';

export default {
  name: 'Account',
  components: {
    SettingCard,
    Progressions,
  },
  created() {
    this.$store.dispatch('app/updateAppState', { title: 'My_Account', subtitle: null });
  },
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    checkIfLoggedIn() {
      if (!this.$store.getters['user/connected']) {
        const params = {
          logging: true,
          redirect: '/',
          next: null,
        };

        this.$store.dispatch('app/logStatusAndRoute', params);
      }
    },
  },
  mounted() {
    this.checkIfLoggedIn();
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
  gap: 1em;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding: 2em;
}
#flex-dashboard:-webkit-scrollbar {
  display: none; /* Other browsers */
}

.flex-item {
  width: calc(50% - 3em);
  min-width: calc(500px - 3em);
  display: flex;
  flex-flow: column;
  align-items: center;
}

@media only screen and (max-width: 1000px) {
  .flex-item {
    min-width: 100%;
  }
}
</style>
