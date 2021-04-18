<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Add Device Card</h3>
        <b-form>
          <b-form-group horizontal label-for="id-element" label="Device">
            <b-form-select value="dev-001">
              <b-form-select-option value="dev-001">
                dev-001
              </b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group horizontal label-for="id-element" label="Card Type">
            <b-form-select value="Single item">
              <b-form-select-option value="Single item">
                Single item
              </b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group horizontal label-for="id-element" label="Sensor">
            <b-form-select value="temp001">
              <b-form-select-option value="temp001">
                temp001
              </b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group horizontal label-for="id-element" label="Search Form">
            <b-form-select value="temp001">
              <b-form-select-option value="temp001">
                temp001
              </b-form-select-option>
              <span>Hours</span>
            </b-form-select>
          </b-form-group>

          <b-form-row class="d-flex w-100 justify-content-center">
            <b-button variant="primary">OK</b-button>
            <b-button variant="primary" class="ml-3">CANCEL</b-button>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
