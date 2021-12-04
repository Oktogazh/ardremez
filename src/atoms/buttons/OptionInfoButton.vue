<template>
  <div :class="[isSelected? 'outer-selected':  '', 'outer-option-info']">
    <div :class="[isSelected? 'inner-selected':  '', 'inner-option-info']">
      <span id="info" v-html="unit"></span>
      <span id="sub-info" v-html="interval"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OptionInfoButton',
  computed: {
    ...mapState({
      translate: (state) => state.lang,
    }),
    isSelected() {
      const isSelected = (this.$.vnode.key === this.selected);
      return isSelected;
    },
    unit() {
      let price = '';
      if (this.info.currency === 'eur') {
        price += `${this.info.unit_amount / 100} €`;
      }
      return price;
    },
    interval() {
      let interval = '';
      if (this.info.recurring.interval === 'year') {
        interval += `/${this.translate.yr4year}`;
      } else if (this.info.recurring.interval === 'month') {
        interval += `/${this.translate.mth4month}`;
      }
      return interval;
    },
  },
  mounted() {
  },
  props: {
    selected: {
      required: true,
    },
    info: {
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
.outer-option-info {
  background: var(--grad-grey);
  padding: 1px;
  border-radius: 9px;
  box-shadow: var(--slim-box-shadow) var(--middle-black);
  cursor: pointer;
}
.outer-selected {
  background: var(--grad-green);
  box-shadow: var(--wide-box-shadow) var(--lighter-black);
}

.inner-option-info {
  background: rgba(255, 255, 255, .7);
  padding: 20px;
  color: var(--middle-black);
  font-size: 1.5em;
  border-radius: 8px;
}
.inner-selected {
  background: rgba(255, 255, 255, .7);
  padding: 23px;
  color: var(--gold);
  font-size: 1.6em;
}

#info {
  display: block;
  font-weight: bold;
}
#sub-info {
  display: block;
  font-weight: bold;
  font-size: .8em;
  color: var(--middle-black);
}
</style>
