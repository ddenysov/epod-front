<template>
  <el-input
    placeholder="Please input"
    v-model="input"
    @input="onInput"
  />
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiTextInput',

  /**
   * Data elements
   * @returns {{input: string}}
   */
  data () {
    return {
      input: '',
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    }
  }
}
</script>
