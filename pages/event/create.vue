<template>
  <ui-builder page="event/create" />
</template>

<script>
import Vue from 'vue'
import Page from '@/services/page/class/Page';
import PageHelpers from '@/services/page/mixins/PageHelpers';

const page = (new Page('event/create', Vue)).init();

export default Vue.extend({
  /**
   * Component name
   */
  name: 'CreatePage',

  /**
   * Component mixins
   */
  mixins: [PageHelpers],

  /**
   * Fetch hook
   */
  async fetch () {
    await this.setPage(page);
  },
})
</script>
