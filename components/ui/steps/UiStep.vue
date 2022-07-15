<template>
  <div v-if="index == active()" id="add-event-tab" class="step-app">
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
import {eventBus} from '@/services/eventBus';
import {mapState} from 'vuex';

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
     * Step index
     */
    index: {
      type: Number,
      required: true,
    }
  },

  computed: {
    ...mapState('form_event', {
      formData: state => ({...state}),
    })
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Before next hook
     */
    async beforeNext () {
      eventBus.$emit('form:validate', (res, form) => {
        if (res) {
          this.next({...this.formData});
        }
      });
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
