<template>
  <ui-builder
    :tree="tree"
  />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  /**
   * Component name
   */
  name: 'IndexPage',

  data() {
    return {
      tree: []
    }
  },

  async fetch() {
    console.log('FETCH TRACKS');
    const res = await this.$axios.get('/coming-soon');
    this.tree = res.data;
  },
})
</script>
