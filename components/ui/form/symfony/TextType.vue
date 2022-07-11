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
  name: 'TextType',

  /**
   * Inject
   */
  inject: ['input', 'elFormItem', 'elForm'],

  /**
   * Data elements
   * @returns {{innerValue: string}}
   */
  data () {
    return {
      innerValue: '',
    }
  },

  created () {
    this.innerValue = this.elForm.model[this.elFormItem.$options.propsData.prop];
    console.log('createedd');
  },

  methods: {
    onInput(value) {
      this.input(this.elFormItem.$options.propsData.prop, value);
    }
  }
}
</script>
