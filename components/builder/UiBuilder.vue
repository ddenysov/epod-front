<script>
import {mapState} from 'vuex';

export default {
  /**
   * Component name
   */
  name: 'UiBuilder',

  /**
   * Props
   */
  props: {
    /**
     * Components tree
     */
    tree: {
      type: [Object, Array],
      required: true,
    },

    /**
     * Listen forms
     */
    listen: {
      type: Array,
      default: () => [],
    }
  },

  computed: {
    /**
     * Map state
     */
    ...mapState(['stack']),

    /**
     * Stack length
     * @returns {number}
     */
    stackLength () {
      return this.stack.length;
    }
  },

  /**
   * Watchers
   */
  watch: {
    /**
     * Stack length watcher
     */
    stackLength() {
      this.$store.commit('setSubTree', this.stack.at(-1));
    }
  },

  /**
   * Render function
   * @param createElement
   * @returns {*}
   */
  render: function (createElement) {
    const build = function (data, parent) {
      if (Object.keys(data).length === 0) {
        return createElement('div');
      }

      if (data.content) {
        return createElement(data.tag, data.content);
      }

      let params = {...data.input};

      if (Object.keys(data.slots).length > 0) {
        params = Object.assign(params, {
          scopedSlots: {
            filters: () => build(data.slots.filters),
          },
        });

        console.log(params);
      }

      return createElement(data.tag, params, data.children.map((component) => {
        return build(component);
      }))
    };

    return build(this.tree);
  },
}
</script>
