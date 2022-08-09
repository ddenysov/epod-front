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
    init(state, { model, method, action }) {
      state.form = { ...model };
      state.params.method = method;
      state.params.action = action;
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
     * @returns {Promise<void>}
     */
    async submit({ state, commit }) {
      try {
        const res = await this.$axios.request({
          method: state.params.method,
          url: state.params.action,
          data: state.form,
        });
        commit('submit');
      } catch (e) {
        commit('setErrors', {...e.response.data.errors})
      }
    },
  }
}
