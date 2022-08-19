<template>
  <ui-builder
    page="/"
    :listen="['events/search', 'events/filter']"
  />
</template>

<script>
import Vue from 'vue'
import PageHelpers from '@/services/page/mixins/PageHelpers';
import Page from '@/services/page/class/Page';

const page = (new Page('/', Vue)).init();

export default Vue.extend({
  /**
   * Component name
   */
  name: 'IndexPage',

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
