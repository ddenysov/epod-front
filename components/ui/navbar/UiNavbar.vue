<template>
  <header class="header">
    <div class="header-inner">
      <nav class="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar">
						<span class="navbar-toggler-icon">
							<i class="fa-solid fa-bars"></i>
						</span>
          </button>
          <NuxtLink class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" to="/">
            <div class="res-main-logo">
              <img src="/images/logo-icon.svg" alt="">
            </div>
            <div class="main-logo" id="logo">
              <img src="/images/logo.svg" alt="">
              <img class="logo-inverse" src="/images/dark-logo.svg" alt="">
            </div>
          </NuxtLink>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <div class="offcanvas-logo" id="offcanvasNavbarLabel">
                <img src="/images/logo-icon.svg" alt="">
              </div>
              <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div :style="{ 'padding-left': '20px' }" class="offcanvas-body">
              <div class="offcanvas-top-area">
                <div class="create-bg">
                  <a href="create.html" class="offcanvas-create-btn">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>Створити Подію1</span>
                  </a>
                </div>
              </div>
              <ul class="navbar-nav flex-grow-1 pe_5">
                <slot/>
              </ul>
            </div>
          </div>
          <div class="right-header order-2">
            <ul class="align-self-stretch">
                <ui-navbar-link to="/sign-in">Увійти</ui-navbar-link>
              <li>
                <NuxtLink class="create-btn" to="/sign-up">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>Створити Подію</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="overlay"></div>
    </div>
  </header>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiNavbar'
}
</script>
