<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <ui-form-label
          v-if="false"
          :label="label"
          :description="description"
        />
      </template>
      <el-select class="large" v-model="value" :class="{ 'full-width': fullWidth }" placeholder="Select">
        <el-option
          v-for="item in choices"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';
import {mapFields} from 'vuex-map-fields';

export default {
  /**
   * Component name
   */
  name: 'ChoiceType',

  /**
   * Mixins
   */
  mixins: [FormItem],

  /**
   * Props
   */
  props: {
    /**
     * Full width
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    choices: {
      type: Array,
      default: () => ([]),
    }
  },

  data() {
    return {
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
    }
  }
}
</script>
