<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Alpha</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/dashboard" :active="$route.name === 'Dashboard'">
          Dashboard
        </b-nav-item>
        <b-nav-item to="/gateways" :active="$route.name === 'Gateways'">
          Gateway
        </b-nav-item>
        <b-nav-item to="/devices" :active="$route.name === 'Devices'">
          Device
        </b-nav-item>
        <b-nav-item to="/sensors" :active="$route.name === 'Sensors'">
          Sensor
        </b-nav-item>
        <b-nav-item to="/alerts" :active="$route.name === 'Alerts'">
          Alert
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right no-caret>
          <template #button-content>
            <md-icon>account_circle</md-icon> {{ username }}
          </template>
          <b-dropdown-item class="">{{ username }}</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/">
            <md-icon>account_circle</md-icon> <span>User</span>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/">
            <span>Change Password</span>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/"
            ><md-icon>logout</md-icon> <span>Logout</span>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/">
            <md-icon>manage_accounts</md-icon>
            <span class="mr-auto">Administrator</span>
            <md-icon>expand_more</md-icon>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/">
            <md-icon>people</md-icon> <span>Users Management</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    username: {
      default: 'ANGE',
      type: String,
    },
  },
};
</script>
