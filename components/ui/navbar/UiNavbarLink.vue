<template>
  <li class="nav-item">
    <NuxtLink prefetch class="nav-link" :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiNavbarLink',

  /**
   * Props
   */
  props: {
    /**
     * To
     */
    to: {
      type: String,
      required: true,
    }
  }
}
</script>

