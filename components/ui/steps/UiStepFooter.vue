<template>
  <div class="step-footer step-tab-pager mt-4">
    <div :style="{ 'margin-bottom': '50px' }">
      <button
        v-if="backEnabled"
        @click="$emit('back')"
        data-direction="prev"
        class="btn btn-default btn-hover steps_btn"
      >
        Previous
      </button>
      <button
        v-if="nextEnabled"
        data-direction="next"
        class="btn btn-default btn-hover steps_btn"
        @click="$emit('next')"
      >
        Next
      </button>
      <button
        v-if="submitEnabled"
        data-direction="finish"
        class="btn btn-default btn-hover steps_btn"
        @click="$emit('finish')"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import StepMixin from '@/components/ui/steps/mixins/StepMixin';

export default {
  /**
   * Component name
   */
  name: 'UiStepFooter',

  /**
   * Mixins
   */
  mixins: [StepMixin],
}
</script>
