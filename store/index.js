import Vue from 'vue';

/**
 * State
 * @returns {{stack: *[], tree: *[]}}
 */
export const state = () => ({
  tree: [],
  stack: [],
})

/**
 * Getters
 * @type {{}}
 */
export const getter = {}

/**
 * Mutations
 * @type {{setTree(*, *): void, setSubTree(*, *): void}}
 */
export const mutations = {
  /**
   * Set tree
   * @param state
   * @param payload
   */
  setTree(state, payload) {
    state.tree = payload;
  },

  /**
   * Add stack
   * @param state
   * @param payload
   */
  addStack(state, payload) {
    state.stack.push({...payload});
  },

  /**
   * Set subtree
   * @param state
   * @param payload
   */
  setSubTree(state, payload) {
    const map = (items) => {
      if (items.children && items.children.length > 0) {
        if (items.input.props && items.input.props.name === payload.input.props.name) {
          Vue.set(items, 'children', payload.children);
        } else {
          Vue.set(items, 'children', items.children.map((item) => map(item)));
        }
      }
      return items;
    };

    map(state.tree)
  }
}

/**
 * Actions
 * @type {{fetchCounter(*): Promise<number>, nuxtServerInit({commit: *}, {req: *}): Promise<void>, updateTree({state: *, commit: *}, *): void}}
 */
export const actions = {
  /**
   * Update tree
   * @param state
   * @param commit
   * @param payload
   */
  updateTree ({ state, commit }, payload) {
    commit('setSubTree', payload)
  },

  /**
   * Nuxt server init hook
   * @param commit
   * @param req
   * @returns {Promise<void>}
   */
  async nuxtServerInit ({ commit }, { req }) {
    const res = await this.$axios.get('/');
    commit('setTree', res.data);
  },
}
