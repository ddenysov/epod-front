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
    const self = this;
    if (!this.$store.hasModule(this.name)) {
      this.$store.registerModule(this.name, {
        namespaced: true,
        state: () => {
          return {
            form: {...this.model},
            touched: false,
            stack: [],
            dirty: [],
            valid: [],
          }
        },
        getters: {
          getField,
        },
        mutations: {
          validate (state) {
            state.touched = true;
            state.dirty.push({...state.form});
          },
          submit (state) {
            state.valid.push({...state.form});
          },
          updateField,
        },
        actions: {
          hi () {},
        }
      });
    }
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
    }
  },

  /**
   * Watcher
   */
  watch: {
    dirty: {
      deep: true,
      async handler (value) {
        const res = await this.$refs['observer_' + this.name].validate();
        if (true || res) {
          this.$refs['observer_' + this.name].reset();
          this.$store.commit([this.name] + '/submit');
        }
      },
    },

    /**
     * Form
     */
    form: {
      deep: true,
      handler (value) {
        //this.$emit('input', value);
      }
    }
  }
}
</script>
