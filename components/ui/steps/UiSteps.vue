<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
          <div class="main-title text-center">
            <h3>Create Online Event</h3>
          </div>
        </div>
        <div id="add-event-tab" class="col-xl-8 col-lg-9 col-md-12" :style="{ padding: '25px' }">
          <ul class="step-steps">
            <li class="active">
              <a href="#tab_step1">
                <span class="number"></span>
                <span class="step-name">Деталі</span>
              </a>
            </li>
            <li>
              <a href="#tab_step2">
                <span class="number"></span>
                <span class="step-name">Tickets</span>
              </a>
            </li>
            <li>
              <a href="#tab_step3">
                <span class="number"></span>
                <span class="step-name">Setting</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xl-8 col-lg-9 col-md-12">
          <div class="main-card">
            <div class="bp-title">
              <h4><i class="fa-solid fa-circle-info step_icon me-3"></i>Details</h4>
            </div>
            <div class="p-4 bp-form main-form">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="form-group border_bottom pb_30">
                    <label class="form-label fs-16">Give your event a name.*</label>
                    <p class="mt-2 d-block fs-14 mb-3">See how your name appears on the event page and a list of all
                      places where your event name will be used. <a href="#" class="a-link">Learn more</a></p>
                    <input class="form-control h_50" type="text" placeholder="Enter event name here" value="">
                  </div>
                  <div class="form-group border_bottom pt_30 pb_30">
                    <label class="form-label fs-16">Choose a category for your event.*</label>
                    <p class="mt-2 d-block fs-14 mb-3">Choosing relevant categories helps to improve the discoverability
                      of your event. <a href="#" class="a-link">Learn more</a></p>
                    <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple=""
                                                                             data-size="5" title="Select category"
                                                                             data-live-search="true">
                      <option value="01">Arts</option>
                      <option value="02">Business</option>
                      <option value="03">Coaching and Consulting</option>
                      <option value="04">Community and Culture</option>
                      <option value="05">Entrepreneurship</option>
                      <option value="06">Education and Training</option>
                      <option value="07">Family and Friends</option>
                      <option value="08">Fashion and Beauty</option>
                      <option value="09">Film and Entertainment</option>
                      <option value="10">Food and Drink</option>
                      <option value="11">Government and Politics</option>
                      <option value="12">Health and Wellbeing</option>
                      <option value="13">Hobbies and Interest</option>
                      <option value="14">Music and Theater</option>
                      <option value="15">Religion and Spirituality</option>
                      <option value="16">Science and Technology</option>
                      <option value="17">Sports and Fitness</option>
                      <option value="18">Travel and Outdoor</option>
                      <option value="19">Visual Arts</option>
                      <option value="20">Others</option>
                    </select>
                      <button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light"
                              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox"
                              aria-expanded="false" title="Select category">
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">Select category</div>
                          </div>
                        </div>
                      </button>
                      <div class="dropdown-menu ">
                        <div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"
                                                         role="combobox" aria-label="Search" aria-controls="bs-select-1"
                                                         aria-autocomplete="list"></div>
                        <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"
                             aria-multiselectable="true">
                          <ul class="dropdown-menu inner show" role="presentation"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group border_bottom pt_30 pb_30">
                    <label class="form-label fs-16">When is your event?*</label>
                    <p class="mt-2 fs-14 d-block mb-3">Tell your attendees when your event starts so they can get ready
                      to attend.</p>
                    <div class="row g-2">
                      <div class="col-md-6">
                        <label class="form-label mt-3 fs-6">Event Date.*</label>
                        <div class="loc-group position-relative">
                          <input class="form-control h_50 datepicker-here" data-language="en" type="text"
                                 placeholder="MM/DD/YYYY" value="">
                          <span class="absolute-icon"><i class="fa-solid fa-calendar-days"></i></span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row g-2">
                          <div class="col-md-6">
                            <div class="clock-icon">
                              <label class="form-label mt-3 fs-6">Time</label>
                              <div class="dropdown bootstrap-select"><select class="selectpicker" data-size="5"
                                                                             data-live-search="true">
                                <option value="00:00">12:00 AM</option>
                                <option value="00:15">12:15 AM</option>
                                <option value="00:30">12:30 AM</option>
                                <option value="00:45">12:45 AM</option>
                                <option value="01:00">01:00 AM</option>
                                <option value="01:15">01:15 AM</option>
                                <option value="01:30">01:30 AM</option>
                                <option value="01:45">01:45 AM</option>
                                <option value="02:00">02:00 AM</option>
                                <option value="02:15">02:15 AM</option>
                                <option value="02:30">02:30 AM</option>
                                <option value="02:45">02:45 AM</option>
                                <option value="03:00">03:00 AM</option>
                                <option value="03:15">03:15 AM</option>
                                <option value="03:30">03:30 AM</option>
                                <option value="03:45">03:45 AM</option>
                                <option value="04:00">04:00 AM</option>
                                <option value="04:15">04:15 AM</option>
                                <option value="04:30">04:30 AM</option>
                                <option value="04:45">04:45 AM</option>
                                <option value="05:00">05:00 AM</option>
                                <option value="05:15">05:15 AM</option>
                                <option value="05:30">05:30 AM</option>
                                <option value="05:45">05:45 AM</option>
                                <option value="06:00">06:00 AM</option>
                                <option value="06:15">06:15 AM</option>
                                <option value="06:30">06:30 AM</option>
                                <option value="06:45">06:45 AM</option>
                                <option value="07:00">07:00 AM</option>
                                <option value="07:15">07:15 AM</option>
                                <option value="07:30">07:30 AM</option>
                                <option value="07:45">07:45 AM</option>
                                <option value="08:00">08:00 AM</option>
                                <option value="08:15">08:15 AM</option>
                                <option value="08:30">08:30 AM</option>
                                <option value="08:45">08:45 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="09:15">09:15 AM</option>
                                <option value="09:30">09:30 AM</option>
                                <option value="09:45">09:45 AM</option>
                                <option value="10:00" selected="selected">10:00 AM</option>
                                <option value="10:15">10:15 AM</option>
                                <option value="10:30">10:30 AM</option>
                                <option value="10:45">10:45 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="11:15">11:15 AM</option>
                                <option value="11:30">11:30 AM</option>
                                <option value="11:45">11:45 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="12:15">12:15 PM</option>
                                <option value="12:30">12:30 PM</option>
                                <option value="12:45">12:45 PM</option>
                                <option value="13:00">01:00 PM</option>
                                <option value="13:15">01:15 PM</option>
                                <option value="13:30">01:30 PM</option>
                                <option value="13:45">01:45 PM</option>
                                <option value="14:00">02:00 PM</option>
                                <option value="14:15">02:15 PM</option>
                                <option value="14:30">02:30 PM</option>
                                <option value="14:45">02:45 PM</option>
                                <option value="15:00">03:00 PM</option>
                                <option value="15:15">03:15 PM</option>
                                <option value="15:30">03:30 PM</option>
                                <option value="15:45">03:45 PM</option>
                                <option value="16:00">04:00 PM</option>
                                <option value="16:15">04:15 PM</option>
                                <option value="16:30">04:30 PM</option>
                                <option value="16:45">04:45 PM</option>
                                <option value="17:00">05:00 PM</option>
                                <option value="17:15">05:15 PM</option>
                                <option value="17:30">05:30 PM</option>
                                <option value="17:45">05:45 PM</option>
                                <option value="18:00">06:00 PM</option>
                                <option value="18:15">06:15 PM</option>
                                <option value="18:30">06:30 PM</option>
                                <option value="18:45">06:45 PM</option>
                                <option value="19:00">07:00 PM</option>
                                <option value="19:15">07:15 PM</option>
                                <option value="19:30">07:30 PM</option>
                                <option value="19:45">07:45 PM</option>
                                <option value="20:00">08:00 PM</option>
                                <option value="20:15">08:15 PM</option>
                                <option value="20:30">08:30 PM</option>
                                <option value="20:45">08:45 PM</option>
                                <option value="21:00">09:00 PM</option>
                                <option value="21:15">09:15 PM</option>
                                <option value="21:30">09:30 PM</option>
                                <option value="21:45">09:45 PM</option>
                                <option value="22:00">10:00 PM</option>
                                <option value="22:15">10:15 PM</option>
                                <option value="22:30">10:30 PM</option>
                                <option value="22:45">10:45 PM</option>
                                <option value="23:00">11:00 PM</option>
                                <option value="23:15">11:15 PM</option>
                                <option value="23:30">11:30 PM</option>
                                <option value="23:45">11:45 PM</option>
                              </select>
                                <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light"
                                        data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2"
                                        aria-haspopup="listbox" aria-expanded="false" title="10:00 AM">
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">10:00 AM</div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu ">
                                  <div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"
                                                                   role="combobox" aria-label="Search"
                                                                   aria-controls="bs-select-2" aria-autocomplete="list">
                                  </div>
                                  <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1">
                                    <ul class="dropdown-menu inner show" role="presentation"></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label class="form-label mt-3 fs-6">Duration</label>
                            <div class="dropdown bootstrap-select"><select class="selectpicker" data-size="5"
                                                                           data-live-search="true">
                              <option value="15">15m</option>
                              <option value="30">30m</option>
                              <option value="45">45m</option>
                              <option value="60" selected="selected">1h</option>
                              <option value="75">1h 15m</option>
                              <option value="90">1h 30m</option>
                              <option value="105">1h 45m</option>
                              <option value="120">2h</option>
                              <option value="135">2h 15m</option>
                              <option value="150">2h 30m</option>
                              <option value="165">2h 45m</option>
                              <option value="180">3h</option>
                              <option value="195">3h 15m</option>
                              <option value="210">3h 30m</option>
                              <option value="225">3h 45m</option>
                            </select>
                              <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light"
                                      data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3"
                                      aria-haspopup="listbox" aria-expanded="false" title="1h">
                                <div class="filter-option">
                                  <div class="filter-option-inner">
                                    <div class="filter-option-inner-inner">1h</div>
                                  </div>
                                </div>
                              </button>
                              <div class="dropdown-menu ">
                                <div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"
                                                                 role="combobox" aria-label="Search"
                                                                 aria-controls="bs-select-3" aria-autocomplete="list">
                                </div>
                                <div class="inner show" role="listbox" id="bs-select-3" tabindex="-1">
                                  <ul class="dropdown-menu inner show" role="presentation"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
  name: 'UiSteps'
}
</script>
