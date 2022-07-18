export default {
  /**
   * Inject
   */
  inject: ['formName'],

  /**
   * Props
   */
  props: {
    /**
     * Label
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Value
     */
    value: {
      type: [String, Number, Object, Array],
      required: false,
      default: null,
    },

    /**
     * Label
     */
    label: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Description
     */
    description: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Rules
     */
    rules: {
      type: [String, Object],
      required: false,
      default: () => ({})
    },

    /**
     * Rules messages
     */
    messages: {
      type: [String, Object],
      required: false,
      default: () => ({})
    },
  },

  /**
   * Computed props
   */
  computed: {
    innerData: {
      get () {
        return this.getValue(this.$store.state[this.formName][this.name]);
      },
      set (value) {
        this.$store.commit(this.formName + '/updateField', {
          path: this.name,
          value: this.setValue(value),
        });
      }
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Modify value before set
     * @param value
     * @returns {*}
     */
    setValue (value) {
      return value;
    },

    /**
     * Get value before get
     * @param value
     * @returns {*}
     */
    getValue (value) {
      return value;
    }
  }
}
