<template>
  <div v-if="label !== ''" :style="{ 'text-align': 'left'}">
    <span class="form-label fs-16" :style="{ 'margin-bottom': '0px'}" v-html="label" />
    <p class="d-block fs-14 mb-3" v-html="description" />
  </div>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiFormLabel',

  /**
   * Props
   */
  props: {
    /**
     * Label
     */
    label: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Description
     */
    description: {
      type: String,
      required: false,
      default: '',
    },
  }
}
</script>
