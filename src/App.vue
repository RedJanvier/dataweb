<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Navbar from './components/Navbar.vue';
import Sidebar from './views/Sidebar.vue';

export default defineComponent({
  components: {
    Sidebar,
    Navbar,
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

a:hover {
  text-decoration: none !important;
}

.nav-link {
  color: #fff !important;
}

.form-group {
  margin: 2rem 0 imp !important;
  display: grid;
  grid-template-columns: 100px 1fr;
}

.form-group.long {
  display: grid;
  grid-template-columns: 1fr;
}

.form-group input[type='text'],
.form-group input[type='password'],
.form-group input[type='number'],
.btn,
.form-group select {
  border-radius: 0 !important;
}

.nav-link.active {
  border-bottom: 2px solid white;
}

.badge {
  text-transform: uppercase;
}

/* .page-item.disabled {
  background: var(--primary);
  border-color: var(--primary);
} */
</style>
