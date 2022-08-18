<template>
  <ui-builder :tree="tree" />
</template>

<script>
import Vue from 'vue'
import {mapState} from "vuex";

export default Vue.extend({
  name: 'CreatePage',

  data() {
    return {
      treex: []
    }
  },

  /**
   * Computed props
   */
  computed: {
    ...mapState({
      tree: state => state.tree.create_event ?? [],
    }),
  },

  async fetch() {
    if (this.tree.length === 0) {
      console.log('EVENT CREATE');
      const res = await this.$axios.get('/event/create');
      this.$store.commit('setTree', {
        page: 'create_event',
        tree: res.data,
      })
      this.treex = res.data;
    }
  },
})
</script>
