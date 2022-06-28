export const state = () => ({
  counter: 0,
  x: 1,
  tree: [],
})

export const getter = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },

  setTree(state, payload) {
    state.tree = payload;
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    const res = await this.$axios.get('/');
    commit('setTree', res.data);
    console.log(res.data);

  },
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
