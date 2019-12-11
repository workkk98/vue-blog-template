<template>
  <svg aria-hidden="true" class="svg">
    <use :xlink:href="svgHref"></use>
  </svg>
</template>
<script>
// #icon-icon-test列表 #icon-
import './iconfont.js'
export default {
  name: 'icon-svg',
  props: ['svgId'],
  computed: {
    svgHref () {
      return `#icon-${this.svgId}`
    }
  }
}
</script>
<style scoped>
.svg {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
