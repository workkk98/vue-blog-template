<template>
  <div class="nav-block">
    <div class="nav-title" ref="title">{{navDataList.title}}</div>
    <nav-item 
      v-for="(item ,index) of navDataList.list" 
      :key="index" 
      :index="index"
      :item="item"
      @cancel-others="cancelOtherNav" 
      ref="nav-item"></nav-item>
  </div>
</template>

<script>
import NavItem from './NavItem'
export default {
  name: 'nav-bar',
  components: {
    NavItem: NavItem
  },
  methods:{
    cancelOtherNav(playload) {
      if (this.chooseItemIndex > -1) {
        // 得是上次选中的 和 本次新选中得 dom不同才能取消
        if(this.chooseItemIndex !== playload.newChooseIndex) {
        this.$refs['nav-item'][this.chooseItemIndex].cancel()
        }
      }
      this.chooseItemIndex = playload.newChooseIndex
    }
  },
  data() {
    return {
      navDataList: {
        title:'组件',
        list:[
          { subtitle: '布局', route: 'index'},
          { subtitle: 'table', route: 'table'},
          { subtitle: '左侧导航栏', route: 'nav'}
        ]
      },
      //之前选择的item-index
      chooseItemIndex: -1
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
  .nav-title {
    font-weight: bolder;
    font-size: 18px;
    padding-left: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border-left: 5px solid transparent;
  }
  .visble-line {
    border-left: 5px solid #3eaf7c;
  }
</style>