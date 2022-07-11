<template>
  <div id="add-event-tab" class="step-app">
    <slot name="header">
      <ui-step-progress />
    </slot>
    <ui-step-content ref="content">
      <slot />
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
   * Methods
   */
  methods: {
    /**
     * Before next hook
     */
    async beforeNext () {
      try {
        const res = await this.$slots.default[0].componentInstance.$refs.observer.validate();
        console.log(res);
      } catch (e) {
        console.warn(e);
      }
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
