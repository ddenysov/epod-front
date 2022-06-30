<template>
  <h1>ololo</h1>
</template>

<script>
import Vue from 'vue'
import {mapState} from "vuex";

export default Vue.extend({
  name: 'CreatePage',

  /**
   * Computed props
   */
  computed: {
    ...mapState({
      tree: state => state.tree,
    })
  },
})
</script>
