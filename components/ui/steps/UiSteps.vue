<template>
  <div class="row justify-content-center p-80">
    <div class="col-xl-8 col-lg-9 col-md-12">
      <div class="wizard-steps-block">
        <div id="add-event-tab" class="step-app">
          <ul class="step-steps">
            <li
              v-for="(step, index) in steps"
              :class="{ active: active >= index }"
            >
              <a href="#tab_step1">
                <span class="number"></span>
                <span class="step-name">{{ step.title }}</span>
              </a>
            </li>
          </ul>
          <div class="step-content">
            <div class="step-tab-panel step-tab-info active" id="tab_step1">
              <div class="tab-from-content">
                <div class="main-card">
                  <div class="bp-title">
                    <h4><i class="fa-solid fa-circle-info step_icon me-3"></i>Details</h4>
                  </div>
                  <div class="p-4 bp-form main-form">
                    <VNodeRenderer :nodes="currentStep" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="step-footer step-tab-pager mt-4">
            <button data-direction="prev" class="btn btn-default btn-hover steps_btn" style="display: none;">Previous
            </button>
            <button
              data-direction="next"
              class="btn btn-default btn-hover steps_btn"
              @click="next"
            >
              Next
            </button>
            <button data-direction="finish" class="btn btn-default btn-hover steps_btn" style="display: none;">Create
            </button>
          </div>
        </div>
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
  name: 'UiSteps',

  components: {
    VNodeRenderer,
  },

  data () {
    return {
      active: 0,
    };
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
    currentStep () {
      return this.$slots.default[this.active];
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Next
     */
    next () {
      this.active++;
    }
  }
}
</script>
