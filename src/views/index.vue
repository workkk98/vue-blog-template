<template>
  <div class="container">
    <div v-html="markdown"></div>
  </div>
</template>

<script>
import mdRoute from '../markdowns/route'
export default {
  name: 'slog-index',
  data () {
    return {
      markdown: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    mdRoute.getComponent(to.path).then((md) => {
      this.markdown = md.default
    })
    next()
  }
}
</script>

<style scoped>
</style>
