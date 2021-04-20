<template>
  <div>
    <b-form-radio-group class="limiters">
      <b-form-radio size="sm" @change="changeIsLimit"></b-form-radio>
      <b-form-radio size="lg" @change="changeIsLimit"></b-form-radio>
    </b-form-radio-group>
    <b-form-group label="Name" class="long" label-align="left">
      <b-form-input :value="data.name" placeholder="Alert name"></b-form-input>
    </b-form-group>

    <b-form-group label="Unit" class="long" label-align="left">
      <b-form-input :value="data.unit" placeholder="Unit"></b-form-input>
    </b-form-group>

    <b-form-group label="Limit" class="long" label-align="left">
      <b-form-input
        :disabled="isLimit"
        :value="data.upper"
        placeholder="Limit"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Upper limit" class="long" label-align="left">
      <b-form-input
        :value="data.upper"
        :disabled="!isLimit"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Lower limit" class="long" label-align="left">
      <b-form-input
        :value="data.lower"
        :disabled="!isLimit"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Interval" class="long" label-align="left">
      <b-form-input
        :value="data.interval"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Condition" class="long" label-align="left">
      <b-form-select :value="data.condition">
        <b-form-select-option value="" selected
          >Form placeholder</b-form-select-option
        >
        <b-form-select-option value="Over">Over</b-form-select-option>
        <b-form-select-option value="Under">Under</b-form-select-option>
        <b-form-select-option value="Range Over">
          Range Over
        </b-form-select-option>
        <b-form-select-option value="Range Under">
          Range Under
        </b-form-select-option>
      </b-form-select>
    </b-form-group>
    <b-form-group label="Alert Interval" class="long" label-align="left">
      <b-form-input placeholder="Form placeholder"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return {
      isLimit: true,
    };
  },
  props: ['data'],
  methods: {
    changeIsLimit: function() {
      this.isLimit = !this.isLimit;
    },
  },
});
</script>

<style scoped>
.limiters {
  display: flex;
  flex-direction: column;
  position: absolute;
  font-size: 5rem;
  top: 40%;
  left: 25%;
  transform: translate(-90%, -50%);
}
</style>
