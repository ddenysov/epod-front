<template>
  <ValidationProvider rules="required|email" name="Email" v-slot="{ errors }">
    <el-form-item :error="errors[0]" label="Email">
      <el-input v-model="email" />
      <span>Errros: {{ errors }}</span>
    </el-form-item>
  </ValidationProvider>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'ui-form-item',

  /**
   * Props
   */
  props: {
    /**
     * Label
     */
    name: {
      type: String,
      required: true,
    },

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
  },

  data () {
    return {
      email: '',
    }
  }
}
</script>
