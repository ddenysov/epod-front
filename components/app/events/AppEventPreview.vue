<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="main-card mt-4">
      <div class="event-thumbnail">
        <a href="venue_event_detail_view.html" class="thumbnail-img">
          <img src="https://picsum.photos/300/200" alt="">
        </a>
        <span class="bookmark-icon" title="Bookmark"></span>
      </div>
      <div class="event-content">
        <a href="venue_event_detail_view.html" class="event-title">A New Way Of Life</a>
        <div class="duration-price-remaining">
          <span class="duration-price">AUD $100.00*</span>
          <span class="remaining"></span>
        </div>
      </div>
      <div class="event-footer">
        <div class="event-timing">
          <div class="publish-date">
            <span><i class="fa-solid fa-calendar-day me-2"></i>15 Apr</span>
            <span class="dot"><i class="fa-solid fa-circle"></i></span>
            <span>Fri, 3.45 PM</span>
          </div>
          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppEventPreview'
}
</script>

