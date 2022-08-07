import {mapActions, mapState} from 'vuex';

export default {
  keys: () => [],
  /**
   * Computed props
   */
  computed: {
    /**
     * Form data stack
     * @returns {{}}
     */
    stack () {
      console.log('this.keys');
      console.log(this.keys());
      const keys = ['form_search', 'form_filter'];

      const values = {};
      keys.forEach((v) => {
        console.log(v);
        if (typeof this.$store.state[v] !== 'undefined') {
          Object.assign(values, {...this.$store.state[v].stack.at(-1)})
        }
      });

      return values;
    }
  },

  /**
   * Component watcher
   */
  watch: {
    /**
     * Form data stack
     */
    stack: {
      deep: true,
      handler: async function(value) {
        await this.load(value);
      }
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Map VUEX actions
     */
    ...mapActions([
      'updateTree'
    ]),

    /**
     * Load data
     * @param value
     * @returns {Promise<void>}
     */
    async load (value) {
      const params = new URLSearchParams();
      Object.entries(value).forEach((v) => {
        params.append(v[0], v[1]);
      });

      this.loading = true;
      const response = await this.$axios.get(value.action + '?' + params.toString());
      this.children = response.data;
      this.updateTree(response.data);
      this.loading = false;
    },

    /**
     * Form keys
     * @returns {*[]}
     */
    keys () {
      return [];
    }
  },
}
