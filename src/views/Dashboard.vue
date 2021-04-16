<template>
  <div class="d-flex">
    <div
      class="d-flex flex-column p-3 bg-light"
      style="width: 280px; height: 90vh;"
    >
      <a
        href="/"
        class="d-flex justify-content-start mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          class="rounded-circle me-2"
          width="32"
          height="32"
        />
        <span class="ml-2 fs-4">Username</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/gateways" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            Gateway
          </router-link>
        </li>
        <li>
          <router-link to="/devices" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#table"></use>
            </svg>
            Device
          </router-link>
        </li>
        <li>
          <router-link to="/sensors" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#grid"></use>
            </svg>
            Sensor
          </router-link>
        </li>
        <li>
          <router-link to="/alerts" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#people-circle"></use>
            </svg>
            Alert
          </router-link>
        </li>
        <li>
          <router-link to="/data" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#people-circle"></use>
            </svg>
            Data
          </router-link>
        </li>
      </ul>
      <hr />
      <ul>
        <li><router-link to="/">Administrator</router-link></li>
        <li><router-link to="/">Type</router-link></li>
        <li><router-link to="/">Users</router-link></li>
      </ul>
    </div>
    <b-container>
      <b-row class="d-flex justify-content-end">
        <b-col sm="3" class="d-flex justify-content-around">
          <router-link to="/add-device-card" class="btn btn-primary">
            Add card
          </router-link>
          <b-button>Trash</b-button>
        </b-col>
      </b-row>
      <b-row class="p-2" style="gap: 2rem;">
        <b-card>
          <b-card-title><h2>30 &deg;C</h2></b-card-title>
          <b-card-body>
            <h4>dev-001</h4>
            <p>temperature</p>
            <p>10 / 20 15min</p>
          </b-card-body>
        </b-card>
        <b-card>
          <b-card-title><h2>21 &deg;C</h2></b-card-title>
          <b-card-body>
            <h4>dev-002</h4>
            <p>temperature</p>
            <p>10 / 20 15min</p>
          </b-card-body>
        </b-card>
      </b-row>
      <b-row>
        <b-col>
          <LineChart :chartdata="data" />
        </b-col>
      </b-row>
    </b-container>
  </div>
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
  mounted() {},
  methods: {},
};
</script>
