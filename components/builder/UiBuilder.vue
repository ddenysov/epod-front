<script>
import { mapState } from 'vuex';

export default {
  /**
   * Component name
   */
  name: 'UiBuilder',

  /**
   * Computed props
   */
  computed: {
    ...mapState({
      tree: state => state.tree,
    })
  },
  render: function (createElement) {
    const build = function (data) {
      return createElement(data.tag, data.children.map((component) => {
        return build(component);
      }))
    };

    return build(this.tree);
  },
}
</script>
