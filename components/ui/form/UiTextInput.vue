<template>
  <el-input
    placeholder="Please input"
    v-model="innerValue"
    @input="onInput"
  />
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiTextInput',

  inject: ['input', 'elFormItem'],

  /**
   * Data elements
   * @returns {{innerValue: string}}
   */
  data () {
    return {
      innerValue: '',
    }
  },

  methods: {
    onInput(value) {
      this.input(this.elFormItem.$options.propsData.prop, value);
    }
  }
}
</script>
