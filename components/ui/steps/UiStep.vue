<template>
  <div>{{ title }}</div>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiStep',

  /**
   * Props
   */
  props: {
    /**
     * Step title
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Active step
     */
    active: {
      type: Number,
      required: true,
    }
  },
}
</script>
