<template>
  <ui-grid
    label="Всі"
  >
    <slot/>
    <template slot="filters">
      <slot name="filters" />
    </template>
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

}
</script>
