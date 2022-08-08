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
     * Form name
     */
    name: {
      type: String,
      required: true,
    },

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
    formStack() {
      if (!this.$store.state[this.name]) {
        return [];
      }
      return this.$store.state[this.name].valid;
    },

    formTouched() {
      if (!this.$store.state[this.name]) {
        return false;
      }
      return this.$store.state[this.name].touched;
    },
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Form stack
     */
    formStack: {
      deep: true,
      handler (value, prevValue) {
        console.log('DEBUG');
        console.log(this.name);
        console.log(this.formTouched);
        if (this.formTouched) {
          console.log('_____________GOING NEXT')
          console.log(value)
          console.log(prevValue)
          this.next({...value}, this.index);
        }
      },

    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Before next hook
     */
    async beforeNext () {
      this.$store.commit('first_step/validate')
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
