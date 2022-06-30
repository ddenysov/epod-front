<template>
  <div class="explore-events p-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="main-title">
            <h3 class="all event-box" style="display: block;">{{ period.label }}</h3>
          </div>
          <div class="event-filter-items">
            <div>
              <div>
                <el-radio-group v-model="period" size="mini">
                  <el-radio-button
                    v-for="(filter, index) in filters"
                    :key="index"
                    :label="filter"
                  >
                    {{ filter.label }}
                  </el-radio-button>
                </el-radio-group>
              </div>
              <div class="all event-box" style="display: block;">
                <div v-loading="loading" class="row">
                  <template v-if="children">
                    <ui-builder
                      v-for="(component, index) in children.children"
                      :key="index"
                      :tree="component"
                    />
                  </template>
                  <template v-else>
                    <slot />
                  </template>
                </div>
              </div>
              <div class="browse-btn">
                <a href="#" class="main-btn btn-hover ">No More Event</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'AppEvents',

  /**
   * Props
   */
  props: {
    /**
     * Filters
     */
    filters: {
      type: Array,
      required: false,
      default: () => [],
    }
  },

  /**
   * Data attributes
   * @returns {{}}
   */
  data () {
    return {
      children: null,
      period: 'all',
      loading: false,
    };
  },

  /**
   * Created hook
   */
  created () {
    this.period = this.filters[0];
  },

  /**
   * Methods
   */
  methods: {
    async load () {
      this.loading = true;
      const response = await this.$axios.get('/events');
      this.children = response.data;
      console.log('result');
      this.loading = false;
    },
  },

  /**
   * Watcher
   */
  watch: {
    /**
     * Period
     * @param value
     */
    period (value) {
      console.log(value);
      this.load();
    }
  }
}
</script>
