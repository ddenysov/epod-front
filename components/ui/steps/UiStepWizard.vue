<template>
  <div class="container">
    <div class="col-lg-12 col-md-12 mt-40">
      <div class="main-title text-center">
        <h3>Створити нову подію</h3>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-9 col-md-12">
        <div class="wizard-steps-block">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Steps
   */
  name: 'UiStepWizard',

  /**
   * Provide values
   * @returns {{next: default.methods.next, change: default.methods.change, active: (function(): number), back: default.methods.back, steps: {title: *}[]}}
   */
  provide () {
    return {
      steps: this.steps,
      active: () => this.active,
      state: () => this.state,
      next: this.next,
      back: this.back,
      change: this.change,
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
   * Computed properties
   */
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

    /**
     * Get current step data
     * @returns {{title: *}}
     */
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

    /**
     * Change step
     * @param index
     */
    change (index) {
      this.active = index;
    }
  }
}
</script>
