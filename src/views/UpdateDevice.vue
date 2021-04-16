<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-title>Update device</b-card-title>
          <b-button variant="primary">DELETE</b-button>
          <b-form>
            <b-form-group label="ID" label-align="left">
              <b-form-input
                disabled
                placeholder="Input value(Disabled)"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="name" label-align="left">
              <b-form-input placeholder="Input value"></b-form-input>
            </b-form-group>

            <b-form-group label="description" label-align="left">
              <b-form-input placeholder="Input value"></b-form-input>
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
