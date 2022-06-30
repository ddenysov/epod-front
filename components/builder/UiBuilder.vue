<script>
import { mapState } from 'vuex';

export default {
  /**
   * Component name
   */
  name: 'UiBuilder',

  props: {
    tree: {
      type: [Object, Array],
      required: true,
    }
  },

  render: function (createElement) {
    const build = function (data) {
      if (Object.keys(data.input).length > 0) {
        console.log(data.input);
        return createElement(data.tag, { ...data.input }, data.children.map((component) => {
          return build(component);
        }))
      }

      return createElement(data.tag, data.children.map((component) => {
        return build(component);
      }))
    };

    return build(this.tree);
  },
}
</script>
