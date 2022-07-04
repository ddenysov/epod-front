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
      tree: []
    }
  },
  async fetch() {
    const res = await this.$axios.get('/event/create');
    this.tree = res.data;
  },
})
</script>
