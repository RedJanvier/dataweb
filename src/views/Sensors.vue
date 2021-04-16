<template>
  <b-container>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <h2>Sensors list</h2>
        <b-button
          @click="editInfo({}, $event.target, 'Add Sensor')"
          variant="primary"
          >Add new</b-button
        >
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-col sm="3">
        <b-form>
          <b-form-group label="User" label-align="left">
            <b-form-select label-field="User">
              <b-form-select-option>username</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group label="Device" label-align="left">
            <b-form-select>
              <b-form-select-option>mk-dev001</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-form inline>
        <b-form-input class="mx-2" placeholder="Search"></b-form-input>
        <b-button class="mx-2 mr-4" variant="primary">Search</b-button>
        <b-form-select
          id="per-page-select"
          v-model="perPage"
          :options="pageOptions"
          size="sm"
          class="mx-2"
        >
        </b-form-select>
      </b-form>
    </b-row>
    <b-row>
      <b-table
        :borderless="borderless"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
      >
        <template #cell(actions)="row">
          <b-button
            size="sm"
            @click="editInfo(row.item, $event.target, 'Edit Sensor')"
            class="mr-1"
            variant="primary"
          >
            Edit
          </b-button>
        </template>
      </b-table>
    </b-row>
    <b-row>
      <b-col sm="7" md="6" class="mx-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <b-modal :id="infoModal.id" :title="infoModal.title" @hide="resetInfoModal">
      <CreateForm :data="infoModal" />
    </b-modal>
  </b-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CreateForm from '../views/AddSensor';

export default defineComponent({
  components: { CreateForm },
  data() {
    return {
      borderless: true,
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'device', label: 'Device' },
        { key: 'name', label: 'Name' },
        { key: 'desc', label: 'Desc' },
        { key: 'alert', label: 'Alert Condition' },
        { key: 'type', label: 'Type' },
        { key: 'actions', label: '' },
      ],
      items: [
        {
          id: '0000001',
          device: 'dev001',
          name: 'freezer',
          desc: 'BMU350',
          alert: 'upper /lower /0min',
          type: 'Temp.',
        },
        {
          id: '0000002',
          device: 'dev001',
          name: 'box',
          desc: 'BMU350',
          alert: 'upper /lower /30min',
          type: 'Humidity.',
        },
        {
          id: '0000003',
          device: 'dev002',
          name: 'cooler',
          desc: 'BMU350',
          alert: 'upper /lower /15min',
          type: 'Water',
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 2,
      pageOptions: [2, 15, 25],
      infoModal: {
        id: 'info-modal',
        title: '',
        name: '',
        desc: '',
        alert: '',
        device: '',
        type: '',
        in_id: '',
      },
    };
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    editInfo(item, button, title) {
      this.infoModal.title = title;
      this.infoModal.name = item.name;
      this.infoModal.description = item.desc;
      this.infoModal.alert = item.alert;
      this.infoModal.device = item.device;
      this.infoModal.type = item.type;
      this.infoModal.in_id = item.id;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.name = '';
      this.infoModal.description = '';
      this.infoModal.alert = '';
      this.infoModal.device = '';
      this.infoModal.type = '';
      this.infoModal.in_id = '';
    },
  },
});
</script>
