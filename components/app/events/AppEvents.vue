<template>
  <ui-grid
    label="Всі"
  >
    <slot/>
  </ui-grid>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Element from '@/components/builder/mixins/Element';

export default {
  /**
   * Component name
   */
  name: 'AppEvents',

  /**
   * Mixins
   */
  mixins: [Element],

  /**
   * Props
   */
  props: {
    /**
     * Params
     */
    params: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Filters
     */
    filters: {
      type: Array,
      required: false,
      default: () => [],
    }
  },

  /**
   * Data attributes
   * @returns {{}}
   */
  data () {
    return {
      children: null,
      period: 'all',
      loading: false,
    };
  },

  computed: {
    ...mapState('form_search', [
      'stack', 'form',
    ]),

    ...mapState({
      tree: state => state.tree,
    }),
  },

  /**
   * Methods
   */
  methods: {
    ...mapActions([
      'updateTree'
    ]),

    async load () {
      const params = new URLSearchParams();
      params.append('category', this.form.category)
      params.append('complexity', this.form.complexity)
      params.append('period', this.period.key)


      this.loading = true;
      const response = await this.$axios.get('/events?' + params.toString());
      this.children = response.data;
      this.updateTree(response.data);
      this.loading = false;
    },
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Period
     * @param value
     */
    period (value) {
      this.load();
    },

    stack (value) {
      this.load();
    },
  }
}
</script>
