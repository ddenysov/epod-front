<template>
  <client-only>
    <l-map :style="{ height: height + 'px' }" :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="innerData" :lat-lng="innerData"></l-marker>
    </l-map>
  </client-only>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'UiMap',

  /**
   * Props
   */
  props: {
    /**
     * Map height in pixels
     */
    height: {
      type: Number,
      default: 300,
      required: false,
    },

    /**
     * Map height in pixels
     */
    zoom: {
      type: Number,
      default: 14,
      required: false,
    },

    center: {
      type: Object
    }
  }
}
</script>
