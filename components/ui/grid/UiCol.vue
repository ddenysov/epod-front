<template>
  <el-col :span="span">
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
    }
  }
}
</script>
