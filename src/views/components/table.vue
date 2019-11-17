<template>
  <div class="container">
    <header>
      <h1 class="title">table</h1>
    </header>
    <main>
      <div>{{reason}}</div>
      <div class="table-container">
        <div class="sub-title">自由的tbody：</div>
        <div>{{templateTable}}</div>
        <style-table :tableHeader="tableHeader" :tableData="tableData" openDIY="true">
          <template v-slot:cool="scope">
              <td class="td-template td-single-ele">{{scope.row.name}}</td>
              <td class="td-template td-single-ele">{{scope.row.birthday}}</td>
              <td class="td-template">{{scope.row.age}}</td>
              <tr><td colspan="3" style="text-align:left" class="td-template">留言:</td></tr>
          </template>
        </style-table>
      </div>
    </main>
  </div>
</template>

<script>
import StyleTable from '../../components/StyleTable/'
export default {
  name: 'style-Table-index',
  components:{
    StyleTable: StyleTable
  },
  data() {
    return {
      reason: '目的: el-table满足不了需求，所以定制了这个table，后来觉得这个table的成长'+
        '性很高，所以拿到这里来，试试看能不能逐渐演变成成熟table组件,话不多说下面是效果及原理',
      tableHeader: [{width: '100', title: '姓名'}, {width: '100', title: '生日'}, {width: '100', title: '年龄'}],
      tableData: [
        { name : '张小凡', birthday: '1998/01/16', age: '21'},
        { name : '乐川' , birthday: '2019/09/25', age: '1'}
      ],
      templateTable: "原理：table只提供了提供了表格容器，你大可通过template-slot绘制自己需要的表格"
      +"具体说明下我的理解对于template-slot，这个组件自由度很高，对应关系可以通过这个例子："
      +"卡带A(template)的插槽(slot)叫小霸王，那么他可以插到叫小霸王(name)的游戏机(slot)上,然后template就可以拿到相应slot的所有属性"
    }
  }
}
</script>

<style scoped>
  .title {
    border-bottom: 1px solid #eaecef;
  }
  .table-container {
    margin-top: 80px;
  }
  div {
    margin-top: 20px;
  }
  .sub-title {
    font-size: 18px;
    font-weight: bold;
  }
  .td-template {
    border-top: 1px solid #eaecef;
  }
  .td-single-ele {
    border-right: 1px solid #eaecef;
  }
</style>