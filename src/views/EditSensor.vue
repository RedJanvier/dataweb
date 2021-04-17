<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-title>Edit Sensor</b-card-title>
          <b-button>DELETE</b-button>
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

            <b-form-group label="name" horizontal label-for="id-element">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="description" horizontal label-for="id-element">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="Type" horizontal label-for="id-element">
              <b-form-select>
                <b-form-select-option>Temperature</b-form-select-option>
              </b-form-select>
              <b-button>New Type</b-button>
            </b-form-group>

            <b-form-group label="Alert" horizontal label-for="id-element">
              <b-form-select>
                <b-form-select-option>Temperature</b-form-select-option>
              </b-form-select>
              <b-button>New Alert</b-button>
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
