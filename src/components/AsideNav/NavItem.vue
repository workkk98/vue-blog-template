<template>
  <div :class="classList" @click="activeNavBar">{{item.subtitle}}</div>
</template>

<script>
export default {
  name: 'nav-item',
  props: ['item', 'index'],
  methods: {
    activeNavBar() {
      this.classList.push('visble-line')
      this.$emit('cancel-others',{ newChooseIndex: this.index })
      if (this.item.path) {
        if(this.$route.path !== this.item.path) {
          this.$router.push({ path: this.item.path })
        }
      }
    },
    cancel() {
      this.classList = ['nav-list']
    }
  },
  data() {
    return {
      classList:[ 'nav-list']
    }
  },
  created() {
  }
}
</script>


<style scoped>
  .nav-list {
    padding-left: 2rem;
    margin-bottom: 0.5rem;
    border-left: 5px solid transparent;
    cursor: pointer;
  }
  .visble-line {
    border-left: 5px solid #3eaf7c;
  }
</style>