export default {
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
}
