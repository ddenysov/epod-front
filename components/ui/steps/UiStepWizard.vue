<template>
  <div class="row justify-content-center p-80">
    <div class="col-xl-8 col-lg-9 col-md-12">
      <div class="wizard-steps-block">
        <VNodeRenderer :nodes="currentStepNode" />
      </div>
    </div>
  </div>
</template>

<script>
import VNodeRenderer from '@/components/builder/VNodeRenderer';

export default {
  /**
   * Steps
   */
  name: 'UiStepWizard',

  /**
   * Components
   */
  components: {
    VNodeRenderer,
  },

  provide () {
    // use function syntax so that we can access `this`
    return {
      steps: this.steps,
      active: () => this.active,
      next: this.next,
      back: this.back,
    }
  },

  /**
   * Data
   * @returns {{active: number}}
   */
  data () {
    return {
      active: 0,
      state: {},
    };
  },

  /**
   * Created hook
   */
  created () {
    const state = () => ({
      foo: 'bar'
    });
    this.$store.registerModule('UiSteps', {
      state: () => ({ololo: 'trololo'}),
    });
  },

  computed: {
    /**
     * Get steps nodes from default slots
     * @returns {{title: *}[]}
     */
    steps () {
      return this.$slots.default.map((node) => {
        return {
          title: node.data.props.title,
        }
      });
    },

    /**
     * Defines current step VNode
     * @returns {VNode}
     */
    currentStepNode () {
      return this.$slots.default[this.active];
    },

    currentStep () {
      return this.steps[this.active];
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Next
     */
    next (form) {
      this.$set(this.state, this.active, form);
      this.active++;
    },

    /**
     * Next
     */
    back () {
      this.active--;
    },
  }
}
</script>
