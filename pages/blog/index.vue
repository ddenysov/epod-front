<template>
  <div>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <h1>olololoolololo</h1>
    <ui-builder
      :tree="tree"
    />
  </div>
</template>

<script>
import database from '@/services/page/class/Database';
import Vue from 'vue'
import axios from 'axios';
import Dexie from 'dexie';

var res1 = null;
const data = axios.get('/api/coming-soon').then((response) => res1 = response.data);

database.store('ololwqwqw1111ox111', 'alalal123');

const a = database.exists('ololoqx').then((x) => console.log(x));

console.log(a);

export default Vue.extend({
  /**
   * Component name
   */
  name: 'IndexPage',

  data () {
    return {
      tree: []
    }
  },

  beforeCreate () {
    console.log('OKOKOK');
  },

  created () {
    console.log('CREATEEED');
  },

  async fetch () {
    console.log(res1);
    // const res = await this.$axios.get('/coming-soon');
    this.tree = res1;
  },
})
</script>
