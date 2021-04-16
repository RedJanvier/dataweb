<template>
  <b-form>
    <b-form-row class="d-flex justify-content-end">
      <b-button v-if="data.in_id" variant="danger">DELETE</b-button>
    </b-form-row>
    <b-form-group label="ID" label-align="left">
      <b-form-input
        :value="data.in_id"
        disabled
        placeholder="Input value(Disabled)"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="name" label-align="left">
      <b-form-input :value="data.name" placeholder="Input value"></b-form-input>
    </b-form-group>

    <b-form-group label="description" label-align="left">
      <b-form-input
        :value="data.description"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
});
</script>
