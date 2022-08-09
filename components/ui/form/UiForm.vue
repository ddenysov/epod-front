<template>
  <ValidationObserver :ref="'observer_' + name">
    <el-form
      :ref="'elForm_' + name"
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
import {getField, mapFields, updateField} from 'vuex-map-fields';
import store from './store/form';

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
     * Form name
     */
    name: {
      type: String,
      required: true,
    },

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
      formName: this.name,
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
    if (!this.$store.hasModule(this.name)) {
      this.$store.registerModule(this.name, store);
      this.$store.commit(this.name + '/init', this.model);
    }
  },

  mounted () {
    this.$nextTick(function() {
      this.$refs['observer_' + this.name].reset();
    })
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
   * Computed props
   */
  computed: {
    /**
     * Form unvalidated stack
     * @returns {any}
     */
    dirty () {
      if (!this.$store.state[this.name]) {
        return [];
      }
      return this.$store.state[this.name].dirty;
    },

    errors () {
      if (!this.$store.state[this.name]) {
        return [];
      }
      return this.$store.state[this.name].errors;
    },
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Errors
     */
    errors: {
      deep: true,
      handler (value) {
        this.$refs['observer_' + this.name].setErrors(value);
      },
    },

    /**
     * Unvalidated data, every time when we press submit
     */
    dirty: {
      deep: true,
      async handler (value) {
        const res = await this.$refs['observer_' + this.name].validate();
        if (res) {
          this.$nextTick(function () {
            this.$store.dispatch(this.name + '/submit');
          });
        }
      },
    },
  }
}
</script>
