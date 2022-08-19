<template>
  <ui-builder
    page="sign_up"
  />
</template>

<script>
import Vue from 'vue'
import PageHelpers from '@/services/page/mixins/PageHelpers';
import Page from '@/services/page/class/Page';

const page = (new Page('sign_up', Vue)).init();

export default Vue.extend({
  /**
   * Component name
   */
  name: 'IndexPage',

  /**
   * Layout
   */
  layout: 'auth',

  /**
   * Mixins
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
