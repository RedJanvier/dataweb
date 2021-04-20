<template>
  <b-container style="height: 94vh !important;" fluid>
    <b-row class="h-100">
      <b-col sm="3" class="bg-light h-100 p-4">
        <ContentSidebar
          :title="title"
          :titleIcon="titleIcon"
          :addNew="true"
          :addNewFx="editInfo"
          :addNewText="addNewText"
        >
          <b-form class="my-4">
            <b-form-group class="long" label="User" label-align="left">
              <b-form-select>
                <b-form-select-option>Name</b-form-select-option>
              </b-form-select>
            </b-form-group>

            <b-form-group class="long" label="Name" label-align="left">
              <b-form-select>
                <b-form-select-option>Name</b-form-select-option>
              </b-form-select>
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
      <b-col sm="9" class="h-100 p-5">
        <b-row align-h="end">
          <b-button
            variant="transparent"
            style="font-size: 12px !important;"
            @click="editInfo({}, $event.target, addNewText)"
          >
            <md-icon style="font-size: 16px !important;">note_add</md-icon>
            <span>Add New</span>
          </b-button>
        </b-row>
        <b-row>
          <b-table
            small
            striped
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
          >
            <template #cell(name)="row">
              <b-badge variant="primary" pill>{{ row.item.name }}</b-badge>
            </template>
            <template #cell(actions)="row">
              <b-button
                size="sm"
                @click="editInfo(row.item, $event.target, 'Update Alert data')"
                class="mx-1"
                variant="transparent"
              >
                <md-icon>edit</md-icon>
              </b-button>
            </template>
          </b-table>
        </b-row>
        <b-row>
          <b-col>
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="center"
              hide-goto-end-buttons
            ></b-pagination>
          </b-col>
        </b-row>
        <Modal
          :data="infoModal"
          :title="title"
          :titleIcon="titleIcon"
          :resetInfoModal="resetInfoModal"
        >
          <CreateForm :data="infoModal" />
        </Modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import ContentSidebar from '../components/ContentSidebar.vue';
import CreateForm from '../views/AddAlert.vue';
import Modal from '../components/Modal.vue';

export default defineComponent({
  components: { CreateForm, Modal, ContentSidebar },
  data() {
    return {
      title: 'Alert',
      titleIcon: 'warning_amber',
      addNewText: 'Add new Alert data',
      fields: [
        { key: 'id', label: 'Alert ID' },
        { key: 'name', label: 'Name' },
        { key: 'limit', label: 'Limit' },
        { key: 'upper', label: 'Upper' },
        { key: 'lower', label: 'Lower' },
        { key: 'condition', label: 'Condition' },
        { key: 'interval', label: 'Interval' },
        { key: 'actions', label: '' },
      ],
      items: [
        {
          id: '12345678-abcdefgh',
          name: 'Temp.',
          limit: '4 °C',
          condition: 'Over',
          interval: '0',
        },
        {
          id: '12345678-abcdefgh',
          name: 'Temp.',
          limit: '-15 °C',
          condition: 'Under',
          interval: '0',
        },
        {
          id: '12345678-abcdefgh',
          name: 'Freezer',
          upper: '-5 °C',
          lower: '5 °C',
          condition: 'Range In',
          interval: '3min',
        },
        {
          id: '12345678-abcdefgh',
          name: 'Humidity',
          upper: '60%',
          lower: '70%',
          condition: 'Range Out',
          interval: '3min',
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      pageOptions: [20, 25],
      infoModal: {
        id: 'info-modal',
        title: '',
        upper: '',
        lower: '',
        condition: '',
        interval: '',
        in_id: '',
        action: {
          text: '',
        },
      },
    };
  },
  mounted() {
    this.totalRows = 150;
  },
  methods: {
    editInfo(item, button, title) {
      const action = title.split(' ')[0];

      this.infoModal.title = title;
      this.infoModal.action.text = action === 'Add' ? 'Add New' : 'Update';
      this.infoModal.upper = item.upper;
      this.infoModal.lower = item.lower;
      this.infoModal.condition = item.condition;
      this.infoModal.interval = item.interval;
      this.infoModal.in_id = item.id;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.action.text = '';
      this.infoModal.upper = '';
      this.infoModal.lower = '';
      this.infoModal.condition = '';
      this.infoModal.interval = '';
      this.infoModal.in_id = '';
    },
  },
});
</script>

<style></style>
