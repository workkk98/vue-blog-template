<template>
  <div class="nav-block">
    <div class="nav-title" ref="title" @click="goToSomeWhere">{{navData.title}}</div>
    <nav-item 
      v-for="(item ,index) of navData.list" 
      :key="index" 
      :index="index"
      :item="item"
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
  props: ['navData'],
  methods:{
    goToSomeWhere() {
      if (this.navData.path) {
        this.$router.push({ path: this.navData.path })
      }
    }
  },
  data() {
    return {
      //之前选择的item-index
      chooseItemIndex: -1
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
  .nav-block {
    margin-bottom: 2rem;
  }
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