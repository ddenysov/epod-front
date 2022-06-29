<template>
  <div class="hero-banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10">
          <div class="hero-banner-content">
            <h2>Discover Events For All The Things You Love</h2>
            <div class="search-form main-form">
              <ui-form>
                <div class="row g-3">
                  <div class="col-lg-5 col-md-12">
                    <ui-select />
                  </div>
                  <div class="col-lg-5 col-md-12">
                    <ui-select />
                  </div>
                  <div class="col-lg-2 col-md-12">
                    <ui-button>Пошук</ui-button>
                  </div>
                </div>
              </ui-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiHeroBanner',

  data () {
    return {
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: ''
    }
  }
}
</script>
