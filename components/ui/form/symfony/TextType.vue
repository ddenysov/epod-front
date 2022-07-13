<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <ui-form-label
          :label="label"
          :description="description"
        />
      </template>
      <el-input
        placeholder=""
        v-model="innerValue"
        @input="onInput"
      />
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';

export default {
  /**
   * Component name
   */
  name: 'TextType',

  /**
   * Mixins
   */
  mixins: [FormItem],

  /**
   * Inject
   */
  inject: ['input', 'elForm'],

  /**
   * Data elements
   * @returns {{innerValue: string}}
   */
  data () {
    return {
      innerValue: '',
    }
  },

  created () {
    this.innerValue = this.elForm.$options.propsData.model[this.name];
  },

  methods: {
    onInput (value) {
      this.input(this.name, value);
    }
  }
}
</script>
