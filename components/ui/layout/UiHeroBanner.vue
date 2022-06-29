<template>
  <div class="hero-banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10">
          <div class="hero-banner-content">
            <h2>Discover Events For All The Things You Love</h2>
            <div class="search-form main-form">
              <div class="row g-3">
                <div class="col-lg-5 col-md-12">
                  <div class="form-group search-category">
                    <div class="dropdown bootstrap-select" style="width: 100%;"><select class="selectpicker" data-width="100%" data-size="5">
                      <option value="browse_all" data-icon="fa-solid fa-tower-broadcast" selected="">Browse All</option>
                      <option value="online_events" data-icon="fa-solid fa-video">Online Events</option>
                      <option value="venue_events" data-icon="fa-solid fa-location-dot">Venue Events</option>
                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Browse All"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"><i class=" fa-solid fa-tower-broadcast"></i>&nbsp;Browse All</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12">
                  <div class="form-group">
                    <div class="dropdown bootstrap-select" style="width: 100%;"><select class="selectpicker" data-width="100%" data-size="5" data-live-search="true">
                      <option value="01" selected="">All</option>
                      <option value="02">Arts</option>
                      <option value="03">Business</option>
                      <option value="04">Coaching and Consulting</option>
                      <option value="05">Community and Culture</option>
                      <option value="06">Education and Training</option>
                      <option value="07">Family and Friends</option>
                      <option value="08">Fashion and Beauty</option>
                      <option value="09">Film and Entertainment</option>
                      <option value="10">Food and Drink</option>
                      <option value="11">Free</option>
                      <option value="12">Health and Wellbeing</option>
                      <option value="13">Hobbies and Interest</option>
                      <option value="14">Music and Theater</option>
                      <option value="15">Religion and Spirituality</option>
                      <option value="16">Science and Technology</option>
                      <option value="17">Sports and Fitness</option>
                      <option value="18">Travel and Outdoor</option>
                      <option value="19">Visual Arts</option>
                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="All"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">All</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list"></div><div class="inner show" role="listbox" id="bs-select-2" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-12">
                  <a href="#" class="main-btn btn-hover w-100">Find</a>
                </div>
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
  name: 'UiHeroBanner'
}
</script>
