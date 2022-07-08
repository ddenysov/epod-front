<template>
  <div id="add-event-tab" class="step-app">
    <slot name="header">
      <ui-step-progress />
    </slot>
    <ui-step-content>
      <slot />
    </ui-step-content>
    <slot name="footer">
      <ui-step-footer />
    </slot>
  </div>
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
  },
}
</script>
