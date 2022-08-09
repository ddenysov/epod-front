<template>
  <ValidationObserver :ref="'observer_' + name">
    <el-form
      :ref="'elForm_' + name"
      :rules="rules"
      size="large"
      hide-required-asterisk
    >
      <slot />
    </el-form>
  </ValidationObserver>
</template>

<script>
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
     * Form group
     */
    group: {
      type: String,
      required: false,
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
    },

    /**
     * Action
     */
    action: {
      type: String,
      default: '',
    },

    /**
     * Method
     */
    method: {
      type: String,
      default: '',
    },
  },

  provide () {
    return {
      input: this.input,
      formName: this.storeName,
      formParts: this.storeParts,
    }
  },

  /**
   * Created hook
   */
  created () {
    if (this.group && !this.$store.hasModule(this.group) ) {
      this.$store.registerModule(this.group, { namespaced: true });
    }

    if (!this.$store.hasModule(this.storeParts)) {
      this.$store.registerModule(this.storeParts, store);
      this.$store.commit([this.storeName, 'init'].join('/'), {
        model: this.model,
        action: this.action,
        method: this.method,
        group: this.group,
      });
    }
  },

  /**
   * Mounted hook
   */
  mounted () {
    this.$nextTick(function () {
      this.$refs['observer_' + this.name].reset();
    })
  },

  /**
   * Computed props
   */
  computed: {
    /**
     * Store parts
     */
    storeParts () {
      const parts = [];
      if (this.group) {
        parts.push(this.group);
      }
      parts.push(this.name)

      return parts;
    },

    /**
     * Store name
     */
    storeName () {
      return this.storeParts.join('/');
    },

    /**
     * Form unvalidated stack
     * @returns {any}
     */
    dirty () {
      if (!this.$store.state[this.storeName]) {
        return [];
      }
      return this.$store.state[this.storeName].dirty;
    },

    errors () {
      if (!this.$store.state[this.storeName]) {
        return [];
      }
      return this.$store.state[this.storeName].errors;
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
            this.$store.dispatch(this.storeName + '/submit');
          });
        }
      },
    },
  }
}
</script>
