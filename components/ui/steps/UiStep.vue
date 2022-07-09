<template>
  <div id="add-event-tab" class="step-app">
    <slot name="header">
      <ui-step-progress />
    </slot>
    <ui-step-content ref="content">
      <ui-form
        ref="form"
        :model="form"
        :rules="rules"
        @input="updateForm"
      >
        <slot  />
      </ui-form>
    </ui-step-content>
    <slot name="footer">
      <ui-step-footer
        @next="beforeNext"
        @back="beforeBack"
        @submit="beforeSubmit"
      />
    </slot>
  </div>
</template>

<script>
import StepMixin from '@/components/ui/steps/mixins/StepMixin';

export default {
  /**
   * Component name
   */
  name: 'UiStep',

  /**
   * Mixins
   */
  mixins: [StepMixin],

  /**
   * Props
   */
  props: {
    /**
     * Step title
     */
    title: {
      type: String,
      required: true,
    },
  },

  /**
   * Form
   * @returns {{form: {}}}
   */
  data () {
    return {
      form: {
        name: 'trololo',
        description: '',
      },
      rules: {
        description: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
      }
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Before next hook
     */
    beforeNext () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.next(this.form);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    /**
     * Update form
     */
    updateForm (value) {
      this.form = { ...value };
    },

    /**
     * Before back hook
     */
    beforeBack () {
      this.back();
    },

    /**
     * Before submit hook
     */
    beforeSubmit () {
      this.submit();
    },
  }
}
</script>
