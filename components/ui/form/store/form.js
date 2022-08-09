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
    init(state, payload) {
      state.form = { ...payload };
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
        const res = await this.$axios.post('/form/store', state.form);
        commit('submit');
      } catch (e) {
        console.log(e.response.data.errors);
        commit('setErrors', {...e.response.data.errors})
      }
    },
  }
}
