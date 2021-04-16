import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-device-card',
    name: 'Add Device Card',
    component: () => import('../views/AddDeviceCard.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },

  {
    path: '/add-gateway',
    name: 'Add gateway',
    component: () => import('../views/AddGateway.vue'),
  },
  {
    path: '/update-gateway',
    name: 'Update gateway',
    component: () => import('../views/UpdateGateway.vue'),
  },
  {
    path: '/gateways',
    name: 'Gateways',
    component: () => import('../views/Gateways.vue'),
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('../views/Devices.vue'),
  },
  {
    path: '/add-device',
    name: 'Add Device',
    component: () => import('../views/AddDevice.vue'),
  },
  {
    path: '/update-device',
    name: 'update Device',
    component: () => import('../views/UpdateDevice.vue'),
  },
  {
    path: '/sensors',
    name: 'sensors',
    component: () => import('../views/Sensors.vue'),
  },
  {
    path: '/add-sensor',
    name: 'Add sensor',
    component: () => import('../views/AddSensor.vue'),
  },
  {
    path: '/edit-sensor',
    name: 'Edit sensor',
    component: () => import('../views/EditSensor.vue'),
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: () => import('../views/Alerts.vue'),
  },
  {
    path: '/add-alert',
    name: 'Add alert',
    component: () => import('../views/AddNewAlert.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/add-user',
    name: 'Add user',
    component: () => import('../views/AddUser.vue'),
  },
  {
    path: '/edit-user',
    name: 'Edit user',
    component: () => import('../views/EditUser.vue'),
  },
  {
    path: '/types',
    name: 'types',
    component: () => import('../views/Types.vue'),
  },
  {
    path: '/add-type',
    name: 'Add type',
    component: () => import('../views/AddNewType.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
