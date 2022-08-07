<template>
  <ui-container class="p-80">
    <ui-row>
      <ui-col :span="24">
        <div class="main-title">
          <h3 class="all event-box" style="display: block;">{{ label }}</h3>
        </div>
        <div class="event-filter-items">
          <div>
            FILTERS
            <div class="all event-box" style="display: block;">
              <div class="row" data-ref="event-filter-content" id="MixItUp6074C6">
                <slot />
              </div>
            </div>
            <div class="browse-btn">
              <a href="#" class="main-btn btn-hover ">No More Event</a>
            </div>
          </div>
        </div>
      </ui-col>
    </ui-row>
  </ui-container>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiGrid',

  /**
   * Props
   */
  props: {
    label: String,
    required: false,
    default: '',
  },

  /**
   * Methods
   */
  methods: {
    async load () {
      /*const params = new URLSearchParams();
      params.append('category', this.form.category)
      params.append('complexity', this.form.complexity)
      params.append('period', this.period.key)*/


      this.loading = true;
      const response = await this.$axios.get('/events');
      this.children = response.data;
      this.loading = false;
    },
  },
}
</script>
