<template>
    <td>
      <div>some data fragment{{scope.row}}</div>
    </td>
</template>

<script>
export default {
  name: 'table-col',
  props: ['prop', 'row'],
  data () {
    return {}
  },
  computed: {
    celldata () {
      return this.prop
    }
  }
}
</script>

<style scoped>

</style>
