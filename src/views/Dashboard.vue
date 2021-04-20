<template>
  <b-container class="h-100" style="height: 94vh !important;" fluid>
    <b-row class="h-100">
      <b-col sm="3" class="bg-light h-100 p-4">
        <ContentSidebar :title="title" :titleIcon="titleIcon">
          <b-form class="my-4">
            <b-form-group class="long" label="User" label-align="left">
              <b-form-select>
                <b-form-select-option>Name</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group class="long" label="Device" label-align="left">
              <b-form-select>
                <b-form-select-option>Name</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group class="long" label="ID/Name" label-align="left">
              <b-form-input placeholder="Name"></b-form-input>
            </b-form-group>

            <b-form-group class="long" label="From" label-align="left">
              <b-form-input placeholder="Name"></b-form-input>
            </b-form-group>

            <b-form-group class="long" label="To" label-align="left">
              <b-form-input placeholder="Name"></b-form-input>
            </b-form-group>

            <b-form-group label="Lines" label-align="left">
              <b-form-input placeholder="20"></b-form-input>
            </b-form-group>

            <b-form-row class="d-flex justify-content-center">
              <b-button variant="primary" class="px-5">Search</b-button>
            </b-form-row>
          </b-form>
        </ContentSidebar>
      </b-col>
      <b-col sm="9" class="h-100">
        <b-card
          no-body
          class="p-4 my-3"
          :key="device.name"
          style="box-shadow: 0 4px 5px #ccc;"
          v-for="device in devices"
        >
          <b-row no-gutters>
            <b-col sm="3" class="d-flex flex-column justify-content-between">
              <div class="mb-auto">
                <h4>{{ device.name }}</h4>
                <p style="font-size: 14px;">{{ device.id }}</p>
                <p style="font-size: 12px;">description</p>
              </div>
              <span class="mt-auto">
                <md-icon>leaderboard</md-icon>
              </span>
            </b-col>
            <b-col sm="9">
              <b-table small :items="device.alerts" :fields="alertTableFields">
                <template #cell(type)="row">
                  <b-badge pill variant="primary">{{ row.item.type }}</b-badge>
                </template>
                <template #cell(condition)="row">
                  <span :class="row.item.status === 'danger' && 'text-danger'">
                    {{ row.item.condition }}
                  </span>
                </template>
                <template #cell(current)="row">
                  <span :class="row.item.status === 'danger' && 'text-danger'">
                    {{ row.item.current }}
                  </span>
                </template>
                <template #cell(status)="row">
                  <span
                    :class="
                      row.item.status === 'success'
                        ? 'd-block m-auto bg-success'
                        : 'd-block m-auto bg-danger'
                    "
                    style="border-radius: 50%; width: 15px; height: 15px;"
                    :variant="row.item.status"
                  ></span>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-card>
        <b-pagination
          class="mt-auto"
          align="center"
          v-model="currentPage"
          hide-goto-end-buttons
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContentSidebar from '../components/ContentSidebar';

export default {
  components: { ContentSidebar },
  data() {
    return {
      alertTableFields: [
        { key: 'description', label: 'Description' },
        { key: 'type', label: 'Alert Type' },
        { key: 'condition', label: 'Condition' },
        { key: 'current', label: 'Current' },
        { key: 'status', label: 'Status' },
      ],
      currentPage: 1,
      title: 'Dashboard',
      titleIcon: 'space_dashboard',
      devices: [
        {
          name: 'dev-001',
          id: '12345678-abcdefgh',
          alerts: [
            {
              description: 'TI02',
              type: 'Temp.',
              condition: 'Over 4',
              current: '21 °C',
              status: 'danger',
            },
            {
              description: 'EF-x01',
              type: 'Humidity',
              condition: 'Range Out 50 - 70 3min',
              current: '58%',
              status: 'success',
            },
          ],
        },
        {
          name: 'RPI-001A',
          id: '12345678-abcdefgh',
          alerts: [
            {
              description: 'TI02',
              type: 'Temp.',
              condition: 'Over 4',
              current: '21 °C',
              status: 'danger',
            },
            {
              description: 'EF-x01',
              type: 'Humidity',
              condition: 'Range Out 50 - 70 3min',
              current: '58%',
              status: 'success',
            },
          ],
        },
        {
          name: 'Uber001',
          id: '12345678-abcdefgh',
          alerts: [
            {
              description: 'TI02',
              type: 'Temp.',
              condition: 'Over 4',
              current: '21 °C',
              status: 'danger',
            },
            {
              description: 'EF-x01',
              type: 'Humidity',
              condition: 'Range Out 50 - 70 3min',
              current: '58%',
              status: 'success',
            },
          ],
        },
      ],
    };
  },
};
</script>
