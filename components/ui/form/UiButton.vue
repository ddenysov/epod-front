<template>
  <el-button
    v-on="$listeners"
    :class="{ 'full-width': fullWidth, 'large': true }"
    type="primary">
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'UiButton',

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
