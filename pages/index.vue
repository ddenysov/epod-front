<template>
  <ui-builder
    :tree="tree"
    :listen="['events/search', 'events/filter']"
  />
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex';
import Form from '@/services/page/mixins/Form';

export default Vue.extend({
  /**
   * Component name
   */
  name: 'IndexPage',

  /**
   * Component mixins
   */
  mixins: [Form],

  /**
   * Computed props
   */
  computed: {
    ...mapState({
      tree: state => state.tree,
    }),
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Form keys
     * @returns {*[]}
     */
    keys () {
      return ['form_search', 'form_filter'];
    }
  },
})
</script>
