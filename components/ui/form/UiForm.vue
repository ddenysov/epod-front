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
      formName: 'form_' + this.name,
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
    if (!this.$store.hasModule('form_' + this.name)) {
      this.$store.registerModule('form_' + this.name, {
        namespaced: true,
        state: () => {
          return {
            form: {...this.model},
            stack: [],
          }
        },
        getters: {
          getField,
        },
        mutations: {
          SUBMIT (state) {
            state.stack.push({...state.form, ...{ action: '/events' }})
          },
          updateField,
        },
        actions: {
          hi () {},
        }
      });
    }

    eventBus.$off('form:validate');
    eventBus.$off('form:init');
    eventBus.$on('form:validate', async (callback) => {
      const res = await this.$refs.observer.validate();
      try {
        await callback(res, this.form);
      } catch (e) {
        console.log('ololo123');
        console.log(e);
        console.log(e.response.data.errors);
        this.$refs.observer.setErrors(e.response.data.errors);
      }
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
