<template>
  <div :class="stylesGen" style="width: 280px; height: 100vh;">
    <router-link
      to="/"
      @click="toggle"
      class="d-flex justify-content-start mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <img
        src="https://github.com/mdo.png"
        alt=""
        class="rounded-circle me-2 bg-white"
        width="32"
        height="32"
      />
      <h4 class="ml-2 fs-4">Username</h4>
    </router-link>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link @click="toggle" to="/dashboard" class="nav-link">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link @click="toggle" to="/gateways" class="nav-link link-dark">
          Gateway
        </router-link>
      </li>
      <li>
        <router-link @click="toggle" to="/devices" class="nav-link link-dark">
          Device
        </router-link>
      </li>
      <li>
        <router-link @click="toggle" to="/sensors" class="nav-link link-dark">
          Sensor
        </router-link>
      </li>
      <li>
        <router-link @click="toggle" to="/alerts" class="nav-link link-dark">
          Alert
        </router-link>
      </li>
      <li>
        <router-link @click="toggle" to="/" class="nav-link link-dark">
          Data
        </router-link>
      </li>
    </ul>
    <hr />
    <ul class="bottom-links">
      <li>
        <router-link @click="toggle" to="/" class="nav-link"
          >Administrator</router-link
        >
      </li>
      <li>
        <router-link @click="toggle" to="/types" class="nav-link"
          >Type</router-link
        >
      </li>
      <li>
        <router-link @click="toggle" to="/users" class="nav-link"
          >Users</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    isHidden: {
      type: Boolean,
      default: true,
    },
    toggle: {
      type: Function,
    },
  },
  computed: {
    stylesGen: function() {
      const res = this.isHidden
        ? 'flex-column p-3 bg-light d-none d-md-flex'
        : 'flex-column p-3 bg-light d-md-flex';
      return res;
    },
  },
});
</script>

<style scoped>
.bottom-links {
  list-style: none;
  padding: 0;
}

.nav-link,
h4 {
  color: black;
}
</style>
