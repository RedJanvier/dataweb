<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-title>{{ name }}</b-card-title>
          <b-form>
            <b-form-group label="Device" horizontal label-for="id-element">
              <b-form-select>
                <b-form-select-option>sensor</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group label="ID" horizontal label-for="id-element">
              <b-form-input
                disabled
                placeholder="Input value(Disabled)"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Upper limit" horizontal label-for="id-element">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Lower limit" horizontal label-for="id-element">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Interval" horizontal label-for="id-element">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Condition" horizontal label-for="id-element">
              <b-form-select>
                <b-form-select-option>Temperature</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-row class="d-flex w-100 justify-content-center">
              <b-button variant="primary">OK</b-button>
              <b-button variant="primary" class="ml-3">CANCEL</b-button>
            </b-form-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Add Alert',
  data() {
    return {
      name: 'Add Alert',
    };
  },
};
</script>
