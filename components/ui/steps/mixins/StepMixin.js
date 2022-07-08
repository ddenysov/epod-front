export default {
  inject: ['steps', 'currentStep', 'active', 'next', 'active', 'back'],

  computed: {
    backEnabled () {
      return this.active() > 0;
    },

    nextEnabled () {
      return this.active() < this.steps.length - 1;
    },

    submitEnabled () {
      return this.active() === this.steps.length - 1;
    },

    currentStep () {
      return this.steps[this.active()];
    }
  },
}
