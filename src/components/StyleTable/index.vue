
<template>
  <div>
    <table width="100%" class="default">
      <colgroup>
        <col v-for="(item, index) in tableHeader" :key="index" :width="item.width">
      </colgroup>
      <tbody>
        <tr>
          <th v-for="(item, index) in tableHeader" :key="index">{{item.title}}</th>
        </tr>
      </tbody>
      <tbody v-for="(item,index) of tableData" :key="index" class="table-data">
        <tr v-if="Default" class="default-tr">
          <slot :row="item" name="default"></slot>
        </tr>
        <slot :row="item" name="cool" v-if="DIY"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'style-table',
  props:['tableHeader', 'tableData', 'openDefault', 'openDIY'],
  data() {
    return {
      Default: this.openDefault,
      DIY: this.openDIY
    }
  }
}
</script>

<style scoped>
  .default {
    border-collapse: separate;
    border-spacing: 0px 0px;
    border: 1px solid #eaecef;
  }
  .table-data {
    text-align: center;
  }
  .default-tr td {
    border-top: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
  }
  .default-tr td:last-child {
    border-right: none
  }
</style>