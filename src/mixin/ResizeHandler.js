// 通过mixin的方法 调用钩子修改视图
const { body } = document

const WIDTH = 992

export default {
  beforeMount () {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      this.$store.dispatch('device/toggleDevice', 'mobile')
    }
  },
  methods: {
    $_isMobile () {
      const rect = body.getBoundingClientRect() // domRect
      return rect.width - 1 < WIDTH
    }
  }
}
