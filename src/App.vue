<template>
  <div class="d-flex">
    <Sidebar
      v-if="$route.name !== 'Login'"
      :isHidden="sidebarHide"
      :toggle="toggleSidebar"
    />
    <b-container fluid class="mt-3 w-100">
      <b-row class="d-md-flex justify-content-between mb-3">
        <b-col class="col-1">
          <b-button
            v-if="$route.name !== 'Login'"
            @click="toggleSidebar"
            class="d-block d-md-none"
            variant="primary"
          >
            <b-icon-justify />
          </b-button>
        </b-col>
        <b-col
          sm="5"
          v-if="$route.name === 'Dashboard'"
          lg="3"
          class="d-flex justify-content-end col-7 offset-4"
        >
          <router-link to="/add-device-card" class="btn btn-primary mr-3">
            Add card
          </router-link>
          <b-button variant="primary">Trash</b-button>
        </b-col>
      </b-row>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Sidebar from './views/Sidebar.vue';

export default defineComponent({
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarHide: true,
    };
  },
  methods: {
    toggleSidebar: function() {
      const val = !this.sidebarHide;
      this.sidebarHide = val;
    },
  },
});
</script>

<style>
:root {
  --primary: #007bff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: crimson;
}

.form-group {
  display: grid;
  grid-template-columns: 100px 1fr;
}

.page-link {
  margin: 0 0.2rem;
  border-radius: 6px;
}

/* .page-item.disabled {
  background: var(--primary);
  border-color: var(--primary);
} */
</style>
