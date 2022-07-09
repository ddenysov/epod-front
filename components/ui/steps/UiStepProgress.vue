<template>
  <ul class="step-steps">
    <li
      v-for="(step, index) in steps"
      :class="{ active: active() >= index }"
      :style="{ cursor: 'pointer' }"
    >
      <a @click="change(index)">
        <span class="number"></span>
        <span class="step-name">{{ step.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import StepMixin from '@/components/ui/steps/mixins/StepMixin';

export default {
  /**
   * Component name
   */
  name: 'UiStepProgress',

  /**
   * Mixins
   */
  mixins: [StepMixin],
}
</script>
