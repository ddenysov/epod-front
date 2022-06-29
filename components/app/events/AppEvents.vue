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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>30 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-3.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">Free*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>1 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-4.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Shutter Life</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $85.00</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>1 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>27 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>30 Jun</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>17 Jul</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>20 Jul</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="today event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>15 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>15 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>15 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tomorrow event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thisWeek event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-3.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">Free*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>18 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-4.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Shutter Life</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $85.00</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>21 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>21 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>22 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>22 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thisWeekend event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                            <span><i class="fa-solid fa-calendar-day me-2"></i>22 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 3.45 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>23 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-3.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">Free*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>24 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-4.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Shutter Life</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $85.00</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>24 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nextWeekend event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                            <span><i class="fa-solid fa-calendar-day me-2"></i>25 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 3.45 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>26 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>27 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>28 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>28 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thisMonth event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>15 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-3.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">Free*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i> 16 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-4.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Shutter Life</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $85.00</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>18 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>19 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>21 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>22 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>25 Jul</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nextMonth event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                            <span><i class="fa-solid fa-calendar-day me-2"></i>1 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 3.45 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>5 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>15 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>20 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>27 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thisYear event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>30 Apr</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-3.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">Free*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>1 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-4.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Shutter Life</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $85.00</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>6 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-5.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $41.50*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>27 May</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 12.00 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>30 Jun</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>17 Jul</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-8.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership' 2022</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $120.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>20 August</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Wed, 11.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nextYear event-box">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-1.jpg" alt="">
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
                            <span><i class="fa-solid fa-calendar-day me-2"></i>5 Jan 2023</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Fri, 3.45 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-2.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $75.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>12 Apr 2023</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sat, 11.20 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="venue_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-6.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="venue_event_detail_view.html" class="event-title">Step Up Open Mic Show</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $200.00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>5 Jun 2023</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Thu, 4.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <a href="online_event_detail_view.html" class="thumbnail-img">
                          <img src="images/event-imgs/img-7.jpg" alt="">
                        </a>
                        <span class="bookmark-icon" title="Bookmark"></span>
                      </div>
                      <div class="event-content">
                        <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD $50.00*</span>
                          <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span><i class="fa-solid fa-calendar-day me-2"></i>9 Jul 2023</span>
                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                            <span>Sun, 5.30 PM</span>
                          </div>
                          <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
