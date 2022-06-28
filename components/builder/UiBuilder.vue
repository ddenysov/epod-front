<template>
  <div>
    <component v-for="(component, index) in tree.children" :is="component.tag" :key="index" />
  </div>
</template>

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
  }
}
</script>
