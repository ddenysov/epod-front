import Vue from 'vue';

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
  },

  setSubTree(state, payload) {
    console.log('payload');
    console.log(payload);
    const map = (items) => {
      if (items.children && items.children.length > 0) {
        console.log(items.tag);
        if (items.tag === 'app-events') {
          Vue.set(items, 'children', payload.children);
        } else {
          Vue.set(items, 'children', items.children.map((item) => map(item)));
        }
      }
      return items;
    };

    console.log(map(state.tree));
    console.log(state.tree);
  }
}

export const actions = {
  updateTree ({ state, commit }, payload) {
    console.log('ok');

    commit('setSubTree', payload)
  },

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
