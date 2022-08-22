<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <ui-form-label
          :label="label"
          :description="description"
        />
      </template>
      <client-only>
        <VueEditor v-model="innerData" />
      </client-only>
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';
// Advanced Use - Hook into Quill's API for Custom Functionality

export default {
  /**
   * Component name
   */
  name: 'TextareaType',

  /**
   * Mixins
   */
  mixins: [FormItem],
}
</script>
