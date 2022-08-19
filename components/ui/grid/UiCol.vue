<template>
  <el-col :span="span" :offset="offset">
    <slot />
  </el-col>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiCol',

  /**
   * Props
   */
  props: {
    /**
     * Span
     */
    span: {
      type: Number,
      required: true,
    },

    /**
     * Offset
     */
    offset: {
      type: Number,
      default: 0
    },
  }
}
</script>
