<template>
  <h3 v-html="title"></h3>
  <div class="links-box">
    <div v-for="(linkObj, index) in linksArray" :key="index" class="box">
      <a :href="linkObj.link" target="_blank">
        <img :src="linkObj.img" class="link-img" :title="linkObj.name" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksBox',
  computed: {
    title() {
      return this.links.linksTitle;
    },
    linksArray() {
      return this.links.links;
    },
  },
  props: {
    links: {
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
.links-box {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  gap: 4px;
  padding: 1em 4px;
}

.box {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
}

img {
  width: 90%;
  max-width: 90px;
  border-radius: 10px;
}
figcaption {
}
</style>
