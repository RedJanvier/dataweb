import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue';
import { MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue);
Vue.use(MdIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
