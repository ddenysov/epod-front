<template>
  <ui-button :full-width="fullWidth">Пошук</ui-button>
</template>

<script>

export default {
  /**
   * Component name
   */
  name: 'ButtonType',

  /**
   * Props
   */
  props: {
    /**
     * Full width
     */
    fullWidth: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
