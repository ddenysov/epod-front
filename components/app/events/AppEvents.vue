<template>
  <div class="explore-events p-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="main-title">
            <h3 class="all event-box" style="display: block;">All Events</h3>
            <h3 class="today event-box">Today</h3>
            <h3 class="tomorrow event-box">Tomorrow</h3>
            <h3 class="thisWeek event-box">This Week</h3>
            <h3 class="thisWeekend event-box">This Weekend</h3>
            <h3 class="nextWeekend event-box">Next Weekend</h3>
            <h3 class="thisMonth event-box">This Month</h3>
            <h3 class="nextMonth event-box">Next Month</h3>
            <h3 class="thisYear event-box">This Year</h3>
            <h3 class="nextYear event-box">Next Year</h3>
          </div>
          <div class="event-filter-items">
            <div class="featured-controls">
              <div class="filter-tag mb-3">
                <label><input type="radio" name="colorRadio" value="all" checked=""><span>All</span></label>
                <label><input type="radio" name="colorRadio" value="today"><span>Today</span></label>
                <label><input type="radio" name="colorRadio" value="tomorrow"><span>Tomorrow</span></label>
                <label><input type="radio" name="colorRadio" value="thisWeek"><span>This Week</span></label>
                <label><input type="radio" name="colorRadio" value="thisWeekend"><span>This Weekend</span></label>
                <label><input type="radio" name="colorRadio" value="nextWeekend"><span>Next Weekend</span></label>
                <label><input type="radio" name="colorRadio" value="thisMonth"><span>This Month</span></label>
                <label><input type="radio" name="colorRadio" value="nextMonth"><span>Next Month</span></label>
                <label><input type="radio" name="colorRadio" value="thisYear"><span>This Year</span></label>
                <label><input type="radio" name="colorRadio" value="nextYear"><span>Next Year</span></label>
              </div>
              <div class="all event-box" style="display: block;">
                <div class="row">
                  <slot />
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
  name: 'AppEvents'
}
</script>
