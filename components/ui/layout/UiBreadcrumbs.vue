<template>
  <div class="breadcrumb-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-10">
          <div class="barren-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NuxtLink to="/">Головна</NuxtLink></li>
                <li class="breadcrumb-item active" aria-current="page">Створити подію</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiBreadcrumbs'
}
</script>

