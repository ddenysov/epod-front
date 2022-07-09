<template>
  <div id="add-event-tab" class="step-app">
    <slot name="header">
      <ui-step-progress />
    </slot>
    <ui-step-content ref="content">
      <ui-form
        ref="form"
        :model="formModel"
        :rules="formRules"
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

    /**
     * Form
     */
    form: {
      type: Object,
      required: true,
    }
  },

  /**
   * Form
   * @returns {{form: {}}}
   */
  data () {
    return {
      formData: {},
    }
  },

  /**
   * Created hook
   */
  created () {
    this.form.fields.forEach((field) => {
      //this.$set(this.formData, field.name, field.value);
    });
  },

  computed: {
    formModel () {
      return this.form.fields.reduce((prev, curr) => {
        prev[curr.name] = curr.value;

        return prev;
      }, {})
    },

    formRules () {
      return this.form.fields.reduce((prev, curr) => {
        prev[curr.name] = curr.validation;

        return prev;
      }, {})
    },
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
          this.next(this.formData);
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
      this.formData = { ...value };
    },

    /**
     * Before back hook
     */
    beforeBack () {
      this.back();
    },

    /**
     * Before change hook
     */
    beforeChange (index) {
      this.change(index);
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
