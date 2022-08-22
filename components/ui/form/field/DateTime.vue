<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <ui-form-label
          :label="label"
          :description="description"
        />
      </template>
      <el-date-picker
        v-model="innerData"
        type="datetime"
        placeholder="Select date and time">
      </el-date-picker>
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';

export default {
  /**
   * Component name
   */
  name: 'UiFormFieldDateTime',

  /**
   * Mixins
   */
  mixins: [FormItem],

  /**
   * Methods
   */
  methods: {
    /**
     * Modify value before set
     * @param value
     * @returns {*}
     */
    setValue (value) {
      return {
        date: {
          year: value.getFullYear(),
          month: value.getMonth() + 1,
          day: value.getDate()
        },
        time: {
          hour: value.getHours(),
          minute: value.getMinutes(),
        },
      };
    },

    /**
     * Get value before get
     * @param value
     * @returns {*}
     */
    getValue (value) {
      if (!value) {
        return value;
      }

      const object = new Date([
        value.date.year,
        value.date.month,
        value.date.day,
      ].join(' ') + ' ' + [
        value.time.hour,
        value.time.minute,
        '00'
      ].join(':'));

      console.log(object);

      return object;
    }
  }
}
</script>
