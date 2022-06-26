import axios from 'axios';

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
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    const res = await axios.get('http://localhost:2000/blog');
    console.log(res.data);
    console.log('a;llala');
  },
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
