<template>
  <div id="main_content">
    <div class="row h-100 p-0">
      <div class="col-4 h-100 overflow-auto">
        <city-objects-tree :cityobjects="test_cityjson_file.CityObjects"></city-objects-tree>
      </div>
      <div class="col-8 h-100">
        <three-js-viewer :citymodel="test_cityjson_file"></three-js-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import { ThreeJsViewer, CityObjectsTree } from '../src/entry'

import 'bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css'

import test_cm from './data/geores_testdata.json';

export default {
  name: 'ThreeJsExample',
  components: {
    ThreeJsViewer,
    CityObjectsTree
  },
  data() {
    return {
      test_cityjson_file: test_cm,
      selected_id: 'GMLID_3260444_166090_1429'
    }
  }
}
</script>

<style>
html{
  margin: 0px;
  width: 100%;
  height: 100%;
  padding: 0px;
  overflow-y: hidden; /*important as otherwise size is somehow scrollable which is not desired */
}

body{
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#main_content {
  height: 100%;
  width: 100%;
}
</style>