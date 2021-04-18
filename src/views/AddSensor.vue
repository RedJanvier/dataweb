<template>
  <b-form>
    <b-form-row class="d-flex justify-content-between">
      <b-form-group label="Device" horizontal label-for="id-element">
        <b-form-select :value="data.device">
          <b-form-select-option>sensor</b-form-select-option>
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <b-button v-if="data.in_id" variant="primary">DELETE</b-button>
      </b-form-group>
    </b-form-row>

    <b-form-group label="ID" horizontal label-for="id-element">
      <b-form-input
        :value="data.in_id"
        disabled
        placeholder="Input value(Disabled)"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="name" horizontal label-for="id-element">
      <b-form-input :value="data.name" placeholder="Input value"></b-form-input>
    </b-form-group>

    <b-form-group label="description" horizontal label-for="id-element">
      <b-form-input
        :value="data.description"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Type" horizontal label-for="id-element">
      <b-form-select :value="data.type">
        <b-form-select-option value="">Temperature</b-form-select-option>
      </b-form-select>
      <router-link to="/add-type" class="btn btn-primary">New Type</router-link>
    </b-form-group>

    <b-form-group label="Alert" horizontal label-for="id-element">
      <b-form-select :value="data.alert">
        <b-form-select-option value="">Temperature</b-form-select-option>
      </b-form-select>
      <router-link to="/add-alert" class="btn btn-primary"
        >New Alert</router-link
      >
    </b-form-group>
  </b-form>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
});
</script>
