<template>
  <div class="hero-banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10">
          <div class="hero-banner-content">
            <slot />
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
