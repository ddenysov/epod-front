export default {
  /**
   * Methods
   */
  methods: {
    /**
     * Get state value
     */
    getState() {
      const parts = this.formName.split('/');
      if (parts.length > 1) {
        return this.$store.state[parts[0]][parts[1]];
      }

      return this.$store.state[parts[0]];
    }
  }
}
