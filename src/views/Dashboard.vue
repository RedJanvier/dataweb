<template>
  <b-container fluid>
    <b-row class="px-4 mt-4">
      <b-col sm="12" md="6" lg="4" class="mb-4">
        <b-card class="bg-light">
          <b-card-title><h1>30 &deg;C</h1></b-card-title>
          <b-card-body>
            <h4>dev-001</h4>
            <p>temperature</p>
            <p>10 / 20 15min</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="4" class="mb-4">
        <b-card class="bg-light">
          <b-card-title><h1>21 &deg;C</h1></b-card-title>
          <b-card-body>
            <h4>dev-002</h4>
            <p>temperature</p>
            <p>10 / 20 15min</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="4" class="mb-4">
        <b-card class="bg-light h-100">
          <b-card-title><h1></h1></b-card-title>
          <b-card-body>
            <h4></h4>
            <p></p>
            <p></p>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="px-4">
      <b-col sm="12">
        <b-card class="bg-light">
          <LineChart :chartdata="data" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LineChart from '../components/LineChart.vue';
import data from '../components/data.js';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      data,
    };
  },
};
</script>
