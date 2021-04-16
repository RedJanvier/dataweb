<template>
  <b-form>
    <b-form-row class="d-flex justify-content-between">
      <b-form-group label="Device" label-align="left">
        <b-form-select :value="data.device">
          <b-form-select-option>sensor</b-form-select-option>
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <b-button v-if="data.in_id" variant="danger">DELETE</b-button>
      </b-form-group>
    </b-form-row>

    <b-form-group label="ID" label-align="left">
      <b-form-input
        :value="data.in_id"
        disabled
        placeholder="Input value(Disabled)"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Upper limit" label-align="left">
      <b-form-input
        :value="data.upper"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Lower limit" label-align="left">
      <b-form-input
        :value="data.lower"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Interval" label-align="left">
      <b-form-input
        :value="data.interval"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Condition" label-align="left">
      <b-form-select :value="data.condition">
        <b-form-select-option value="in">in</b-form-select-option>
        <b-form-select-option value="out">out</b-form-select-option>
        <b-form-select-option value="range in">range in</b-form-select-option>
      </b-form-select>
    </b-form-group>
  </b-form>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
});
</script>
