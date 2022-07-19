<template>
  <el-row :gutter="gutter">
    <slot />
  </el-row>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiRow',

  /**
   * Props
   */
  props: {
    /**
     * Space between blocks in pixels
     */
    gutter: {
      type: Number,
      required: false,
      default: 0,
    }
  }
}
</script>
