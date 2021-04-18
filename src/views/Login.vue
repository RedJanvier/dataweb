<template>
  <b-container>
    <b-row align-v="center" align-h="center" style="height: 80vh;">
      <b-col sm="12" md="5">
        <h3 class="text-center">LOGIN</h3>
        <b-form>
          <b-form-group label-align-sm="left" label="Username">
            <b-form-input placeholder="Input value" />
          </b-form-group>
          <b-form-group label-align-sm="left" label="Password">
            <b-form-input type="password" placeholder="Input value" />
          </b-form-group>
          <b-form-group class="actions">
            <b-button v-if="mode !== 'test'" variant="primary" class="px-5"
              >ok</b-button
            >
            <router-link v-else to="/dashboard" class="btn btn-primary px-5">
              ok
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
}
.actions {
  display: flex !important;
  justify-content: center;
}
</style>
