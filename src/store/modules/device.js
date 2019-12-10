export default {
  namespaced: true,
  state: {
    device: 'desktop',
    leftStatus: false
  },
  getters: {},
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    OPEN_OR_CLOSE_LEFT (state, device) {
      state.leftStatus = !state.leftStatus
    }
  },
  actions: {
    toggleDevice ({ commit }, playload) {
      commit('TOGGLE_DEVICE', playload)
    },
    openOrCloseLeft ({ commit, state }) {
      commit('OPEN_OR_CLOSE_LEFT')
    }
  }
}
