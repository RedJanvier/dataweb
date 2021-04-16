<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <div class="d-flex justify-content-between">
            <b-card-title>{{ name }}</b-card-title>
            <b-button variant="primary">DELETE</b-button>
          </div>
          <b-form>
            <b-form-group label="Device" label-align="left">
              <b-form-select>
                <b-form-select-option>sensor</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group label="ID" label-align="left">
              <b-form-input
                disabled
                placeholder="Input value(Disabled)"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Upper limit" label-align="left">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Lower limit" label-align="left">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Interval" label-align="left">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Condition" label-align="left">
              <b-form-select>
                <b-form-select-option>Temperature</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group>
              <b-button variant="primary">OK</b-button>
              <b-button variant="primary" class="ml-3">CANCEL</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Edit Alert',
  data() {
    return {
      name: 'Edit Alert',
    };
  },
};
</script>
