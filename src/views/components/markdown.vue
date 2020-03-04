
<template>
  <div class="container" v-html="content">
  </div>
</template>
<script>
const markdownModule = import('../../markdowns/components/markdown.md')
export default {
  name: 'markdown',
  data () {
    return {
      title: 'markdown',
      content: ''
    }
  },
  async created () {
    const markdownText = await markdownModule
    this.content = markdownText.default
  }
}
</script>
<style scoped>

</style>
