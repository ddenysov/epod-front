<template>
  <div />
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'EventProxy',

  /**
   * Props
   */
  props: {
    /**
     * Value
     */
    value: {
      type: [Number, String, Object, Boolean, Array],
      required: false,
    }
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Value watcher
     */
    value: {
      deep: true,
      handler: function (value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style scoped>

</style>
