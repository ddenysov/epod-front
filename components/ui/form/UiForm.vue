<template>
  <ValidationObserver ref="observer">
    <el-form
      ref="elForm"
      :model="form"
      :rules="rules"
      size="large"
      hide-required-asterisk
    >
      <slot />
    </el-form>
  </ValidationObserver>
</template>

<script>
import {eventBus} from '@/services/eventBus';

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
    eventBus.$off('form:validate');
    eventBus.$off('form:init');
    eventBus.$on('form:validate', async (callback) => {
      const res = await this.$refs.observer.validate();
      callback(res, this.form);
    });

    eventBus.$on('form:init', async (state) => {
      this.form = {...state};
    })

    Object.keys(this.model).forEach((key) => {
      this.$set(this.form, key, this.model[key]);
    });
  },

  /**
   * Methods
   */
  methods: {
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
      handler (value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>
