<template>
  <div>
    <!-- Header Start-->
    <header-block />
    <!-- Header End-->
    <!-- Body Start-->
    <div class="wrapper">
      <div class="hero-banner">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-9 col-md-10">
              <div class="hero-banner-content">
                <h2>The Easiest and Most Powerful Online Event Booking and Ticketing System</h2>
                <p>Barren is an all-in-one event ticketing platform for event organisers, promoters, and managers.
                  Easily create, promote and manage your events of any type and size.</p>
                <a href="create.html" class="main-btn btn-hover">Create Event <i
                  class="fa-solid fa-arrow-right ms-3"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explore-events p-80">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="main-title">
                <h3>Explore Events</h3>
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="event-filter-items">
                <div class="featured-controls">
                  <div class="filter-tag">
                    <a href="explore_events_by_date.html" class="active">All</a>
                    <a href="explore_events_by_date.html">Today</a>
                    <a href="explore_events_by_date.html">Tomorrow</a>
                    <a href="explore_events_by_date.html">This Week</a>
                    <a href="explore_events_by_date.html">This Weekend</a>
                    <a href="explore_events_by_date.html">Next Week</a>
                    <a href="explore_events_by_date.html">Next Weekend</a>
                    <a href="explore_events_by_date.html">This Month</a>
                    <a href="explore_events_by_date.html">Next Month</a>
                    <a href="explore_events_by_date.html">This Year</a>
                    <a href="explore_events_by_date.html">Next Year</a>
                  </div>
                  <div class="controls">
                    <button type="button" class="control" data-filter="all">All</button>
                    <button type="button" class="control" data-filter=".arts">Arts</button>
                    <button type="button" class="control" data-filter=".business">Business</button>
                    <button type="button" class="control" data-filter=".concert">Concert</button>
                    <button type="button" class="control" data-filter=".workshops">Workshops</button>
                    <button type="button" class="control" data-filter=".coaching_consulting">Coaching and Consulting
                    </button>
                    <button type="button" class="control" data-filter=".health_Wellness">Health and Wellbeing</button>
                    <button type="button" class="control" data-filter=".volunteer">Volunteer</button>
                    <button type="button" class="control" data-filter=".sports">Sports</button>
                    <button type="button" class="control" data-filter=".free">Free</button>
                  </div>
                  <div class="row" data-ref="event-filter-content">
                    <div
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness"
                      data-ref="mixitup-target">
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
                    <div
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness"
                      data-ref="mixitup-target">
                      <div class="main-card mt-4">
                        <div class="event-thumbnail">
                          <a href="online_event_detail_view.html" class="thumbnail-img">
                            <img src="images/event-imgs/img-2.jpg" alt="">
                          </a>
                          <span class="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div class="event-content">
                          <a href="online_event_detail_view.html" class="event-title">Earrings Workshop with Bronwyn
                            David</a>
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
                    <div
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness"
                      data-ref="mixitup-target">
                      <div class="main-card mt-4">
                        <div class="event-thumbnail">
                          <a href="venue_event_detail_view.html" class="thumbnail-img">
                            <img src="images/event-imgs/img-3.jpg" alt="">
                          </a>
                          <span class="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div class="event-content">
                          <a href="venue_event_detail_view.html" class="event-title">Spring Showcase Saturday April 30th
                            2022 at 7pm</a>
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
                    <div
                      class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business"
                      data-ref="mixitup-target">
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
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts"
                         data-ref="mixitup-target">
                      <div class="main-card mt-4">
                        <div class="event-thumbnail">
                          <a href="venue_event_detail_view.html" class="thumbnail-img">
                            <img src="images/event-imgs/img-5.jpg" alt="">
                          </a>
                          <span class="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div class="event-content">
                          <a href="venue_event_detail_view.html" class="event-title">Friday Night Dinner at The Old
                            Station May 27 2022</a>
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
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports"
                         data-ref="mixitup-target">
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
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness"
                         data-ref="mixitup-target">
                      <div class="main-card mt-4">
                        <div class="event-thumbnail">
                          <a href="online_event_detail_view.html" class="thumbnail-img">
                            <img src="images/event-imgs/img-7.jpg" alt="">
                          </a>
                          <span class="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div class="event-content">
                          <a href="online_event_detail_view.html" class="event-title">Tutorial on Canvas Painting for
                            Beginners</a>
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
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts"
                         data-ref="mixitup-target">
                      <div class="main-card mt-4">
                        <div class="event-thumbnail">
                          <a href="venue_event_detail_view.html" class="thumbnail-img">
                            <img src="images/event-imgs/img-8.jpg" alt="">
                          </a>
                          <span class="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div class="event-content">
                          <a href="venue_event_detail_view.html" class="event-title">Trainee Program on Leadership'
                            2022</a>
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
                  <div class="browse-btn">
                    <a href="explore_events.html" class="main-btn btn-hover ">Browse All</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Body End-->
    <!-- Footer Start-->
    <footer-block />
    <!-- Footer End-->
  </div>
</template>

<script>
import HeaderBlock from '@/components/layout/HeaderBlock';
import FooterBlock from '@/components/layout/FooterBlock';
export default {
  name: 'default',
  components: {FooterBlock, HeaderBlock}
}
</script>
