export default {
  /**
   * Methods
   */
  methods: {
    /**
     * Set page helper
     * @param page
     * @returns {Promise<void>}
     */
    async setPage(page) {
      const pageData = await page;
      this.$store.commit('setTree', {
        page: pageData.page,
        tree: pageData.tree,
      })
    }
  }
}
