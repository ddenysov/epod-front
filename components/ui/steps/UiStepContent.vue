<template>
  <div class="step-content">
    <div class="step-tab-panel step-tab-info active" id="tab_step1">
      <div class="tab-from-content">
        <div class="main-card">
          <div class="bp-title">
            <h4>{{ currentStep.title }}</h4>
          </div>
          <div class="p-4 bp-form main-form">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepMixin from '@/components/ui/steps/mixins/StepMixin';

export default {
  /**
   * Component name
   */
  name: 'UiStepContent',

  /**
   * Mixins
   */
  mixins: [StepMixin],
}
</script>
