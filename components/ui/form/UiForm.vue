<template>
  <el-form
    ref="elForm"
    :model="form"
    :rules="rules"
    size="large"
    hide-required-asterisk
  >
    <ValidationObserver ref="observer">
      <slot />
    </ValidationObserver>
  </el-form>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'ui-form',

  /**
   * Props
   */
  props: {
    /**
     * Model
     */
    model: {
      type: Object,
      required: true,
    },

    /**
     * Form rules
     */
    rules: {
      type: Object,
      required: false,
    }
  },

  provide () {
    return {
      input: this.input,
    }
  },

  /**
   * Data attributes
   * @returns {{form: {name: string}}}
   */
  data () {
    return {
      form: {},
    }
  },

  created () {
    Object.keys(this.model).forEach((key) => {
      this.$set(this.form, key, this.model[key]);
    });
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Proxy validation
     * @returns {Promise<unknown>}
     */
    validate (callback) {
      return this.$refs.elForm.validate(callback);
    },

    input (field, value) {
      this.form[field] = value;
    }
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Form
     */
    form: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>
