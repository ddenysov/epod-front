<template>
  <div :class="{ 'justify-content-center': align === 'center'}" class="container">
    <slot />
  </div>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiContainer',

  /**
   * Props
   */
  props: {
    /**
     * Align
     */
    align: {
      type: String,
      default: 'left',
    }
  }
}
</script>
