<template>
  <b-container class="">
    <b-row align-v="center" align-h="center" style="height: 80vh;">
      <b-col
        sm="3"
        class="h-100 bg-primary d-flex flex-column justify-content-between text-light"
      >
        <div class="mx-auto mt-5">
          <h2>Alpha</h2>
          <p class="text-center">ver 0.0.1</p>
        </div>
        <footer class="mb-5">
          <p class="text-center">
            Copyright &copy; 2021 MKNOD All right reserved
          </p>
          <p class="text-center">https://mknod.jp</p>
        </footer>
      </b-col>
      <b-col sm="9">
        <h3 class="text-center">Login</h3>
        <b-form class="w-50 mx-auto">
          <b-form-group label-align-sm="left" label="Username">
            <b-form-input placeholder="Input value" />
          </b-form-group>
          <b-form-group label-align-sm="left" label="Password">
            <b-form-input type="password" placeholder="Input value" />
          </b-form-group>
          <b-form-group class="actions">
            <router-link to="/dashboard" class="btn btn-primary px-5">
              <md-icon>login</md-icon>
              Login
            </router-link>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return {
      mode: 'test',
    };
  },
});
</script>

<style scoped>
.form-group {
  display: block !important;
  margin: 3rem 0;
}
.actions {
  display: flex !important;
  justify-content: center;
}

p {
  font-size: 12px;
  margin: 0;
}
</style>
