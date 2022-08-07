<script>
import {mapState} from 'vuex';

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
    const build = function (data, parent) {
      if (Object.keys(data).length === 0) {
        return createElement('div');
      }

      if (data.content) {
        return createElement(data.tag, data.content);
      }

      let params = {...data.input};

      if (Object.keys(data.slots).length > 0) {
        console.log(data.slots.filters);
        console.log(data);

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
