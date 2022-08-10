import {getField, updateField} from 'vuex-map-fields';

export default {
  /**
   * It's a namespaced module
   */
  namespaced: true,

  /**
   * State
   * @returns {{dirty: *[], valid: *[], form: {}, errors: *[]}}
   */
  state: () => {
    return {
      /**
       * Form data
       */
      form: {},

      /**
       * Unvalidated form data stack
       */
      dirty: [],

      /**
       * Validated form data stack
       */
      valid: [],

      /**
       * Errors object
       */
      errors: [],

      /**
       * Response
       */
      response: [],

      /**
       * Form params
       */
      params: {
        /**
         * Form action
         */
        action: '',

        /**
         * Form method
         */
        method: '',

        /**
         * Form group
         */
        group: '',
      },
    }
  },

  /**
   * Getters
   */
  getters: {
    /**
     * Map Fields helper
     */
    getField,
  },

  /**
   * Mutations
   */
  mutations: {
    /**
     * Init form structure to make all fields reactive
     * @param state
     * @param payload
     */
    init (state, {model, method, action, group}) {
      state.form = {...model};
      state.params.method = method;
      state.params.action = action;
      state.params.group = group;
    },
    /**
     * Push form data to validate stack
     * @param state
     */
    validate (state) {
      state.dirty.push({...state.form});
    },

    /**
     * Submit valid form data
     * @param state
     */
    submit (state) {
      state.valid.push({...state.form});
    },

    /**
     * Set errors
     * @param state
     * @param payload
     */
    setErrors (state, payload) {
      state.errors = {...payload};
    },

    /**
     * Set response
     * @param state
     * @param payload
     */
    setResponse (state, payload) {
      state.response.push({...payload});
    },

    /**
     * Map fields setter
     */
    updateField,
  },

  /**
   * Actions
   */
  actions: {
    /**
     * Submit form
     * @param state
     * @param commit
     * @param rootState
     * @returns {Promise<void>}
     */
    async submit ({state, commit, rootState}) {
      let form = {};
      if (state.params.group) {
        Object.entries(rootState[state.params.group]).forEach((v) => {
          form = {...form, ...v[1].form}
        })
      } else {
        form = state.form;
      }

      let url = state.params.action;
      let data = {};
      const method = state.params.method;

      if (state.params.method.toLowerCase() === 'get') {
        const params = new URLSearchParams();
        Object.entries(form).forEach((v) => {
          params.append(v[0], v[1]);
        });
        url = [url, params.toString()].join('?');
      } else {
        data = form;
      }
      try {
        const res = await this.$axios.request({
          method,
          url,
          data,
        });
        commit('setResponse', res.data)
        commit('addStack', res.data, { root: true })
        commit('submit');
      } catch (e) {
        commit('setErrors', {...e.response.data.errors})
      }
    },
  }
}
