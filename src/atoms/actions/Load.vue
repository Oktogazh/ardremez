<template>
  <div :class="[active? 'active': '', 'download-action']">
    <svg width="60%" height="60%" viewBox="0 0 6.085377 6.0854167"
      xmlns="http://www.w3.org/2000/svg">
      <g class="rotate">
        <g transform="translate(-0.925946,-0.97128516)">
          <path :class="[active? '': 'disabled', 'path']"
            d="M 1.3228012,1.1906248 H 6.6144678 L 3.9686345,5.9055 Z"
            sodipodi:nodetypes="cccc" />
          <rect :class="[active? '': 'disabled', 'path']"
            height="0.52916664" x="1.3229165" y="6.3081956" ry="0" rx="0"
            width="5.291667" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Download',
  props: {
    active: {
      required: true,
      default: false,
    },
    angle: {
      required: true,
    },
    size: {
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.download-action {
  position: relative;
  height: v-bind(size);
  width: v-bind(size);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .25;
}

.active {
  opacity: 1;
}
.active:hover {
  cursor: pointer;
}

.rotate {
  transform: rotate(v-bind(angle));
  transform-origin: 50% 50%;
}

.path {
  stroke-opacity: .75;
  stroke-width: .25;
}
</style>
