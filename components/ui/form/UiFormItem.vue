<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <div v-if="label !== ''" :style="{ 'text-align': 'left'}">
          <span class="form-label fs-16" :style="{ 'margin-bottom': '0px'}" v-html="label" />
          <p class="d-block fs-14 mb-3" v-html="description" />
        </div>
      </template>
      <el-input v-model="email" />
    </el-form-item>
  </ValidationProvider>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'ui-form-item',

  /**
   * Props
   */
  props: {
    /**
     * Label
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Label
     */
    label: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Description
     */
    description: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Rules
     */
    rules: {
      type: [String, Object],
      required: false,
      default: () => ({})
    },

    /**
     * Rules messages
     */
    messages: {
      type: [String, Object],
      required: false,
      default: () => ({})
    },
  },

  data () {
    return {
      email: '',
    }
  }
}
</script>
