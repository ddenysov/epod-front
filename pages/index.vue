<template>
  <div>
    <h1>ololololo</h1>
    <h1>ololololo</h1>
    <h1>ololololo</h1>
    <h1>ololololo</h1>
    <h1>ololololo</h1>
    <NuxtLink :prefetch="false" class="nav-link" to="/blog">
      OLOLO
    </NuxtLink>
    <ui-builder
      :tree="tree"
      :listen="['events/search', 'events/filter']"
    />
  </div>

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
      tree: state => state.tree.index ?? [],
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

  async fetch() {
    if (this.tree.length === 0) {
      console.log('INDEX');
      const res = await this.$axios.get('/');
      this.$store.commit('setTree', {
        page: 'index',
        tree: res.data,
      })
    }
  },
})
</script>
