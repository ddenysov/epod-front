<template>
  <el-card shadow="never">
    <div class="d-flex align-items-center flex-wrap pt-4 flex-nowrap">
      <h4 class="fs-14 mb-0 me-auto">Maximum number of tickets for each customer</h4>
      <label class="btn-switch m-0 me-3">
        <input type="checkbox" id="is-restrict-ticket-per-user" v-model="hidden">
        <span class="checkbox-slider"></span>
      </label>
      <div>
        <label class="fs-12 m-0">Unlimited</label>
      </div>
    </div>
    <div v-if="!hidden" class="p-0 mt-4 total_ticket_per_user">
      <slot />
    </div>
  </el-card>
</template>

<script>
export default {
  /**
   * Visibility switcher
   */
  name: 'UiSwitchVisible',

  data () {
    return {
      hidden: true
    }
  }
}
</script>
