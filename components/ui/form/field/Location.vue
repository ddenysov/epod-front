<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item class="location-type" :error="errors[0]" :style="{height: '380px'}">
      <template slot="label">
        <ui-form-label
          :label="label"
          :description="description"
        />
      </template>

      <client-only>
        <l-map style="height: 300px" :zoom="zoom" :center="center" @click="addMarker">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker v-if="innerData" :lat-lng="innerData"></l-marker>
        </l-map>
      </client-only>
      <event-proxy :value="innerData" />
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';
import EventProxy from '@/components/ui/form/validation/EventProxy';

export default {
  /**
   * Component name
   */
  name: 'UiFormFieldLocation',

  /**
   * Components
   */
  components: {EventProxy},
  /**
   * Mixins
   */
  mixins: [FormItem],

  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 14,
      center: [50.4677917, 30.4215867, 14.27],
      markerLatLng: [50.4677917, 30.4215867]
    };
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Add marker to map
     * @param e
     */
    addMarker (e) {
      this.innerData = e.latlng;
    }
  }
}
</script>
