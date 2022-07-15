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
        v-model="innerData"
      />
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
  name: 'TextType',

  /**
   * Mixins
   */
  mixins: [FormItem],

  /**
   * Inject
   */
  inject: ['input', 'elForm', 'formName'],

  /**
   * Data elements
   * @returns {{innerValue: string}}
   */
  data () {
    return {
      innerValue: '',
    }
  },

  computed: {
    innerData: {
      get () {
        return this.$store.state[this.formName][this.name];
      },
      set (value) {
        this.$store.commit(this.formName + '/updateField', {
          path: this.name,
          value: value,
        });
      }
    }
  },
}
</script>
