<template>
  <b-container class="h-100" style="height: 94vh !important;" fluid>
    <b-row class="h-100">
      <b-col sm="3" class="bg-light h-100 p-4">
        <ContentSidebar
          :title="title"
          :titleIcon="titleIcon"
          addNew
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
      <b-col sm="9" class="h-100 p-5 d-flex flex-column">
        <b-row align-h="end">
          <b-button
            variant="transparent"
            style="font-size: 12px;"
            @click="editInfo({}, $event.target, addNewText)"
            ><md-icon style="font-size: 16px !important;">note_add</md-icon>
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
            <template #cell(#)="data">
              {{ data.index }}
            </template>

            <template #cell(actions)="row">
              <b-button
                size="sm"
                @click="
                  editInfo(row.item, $event.target, 'Update Gateway data')
                "
                variant="transparent"
              >
                <md-icon>edit</md-icon>
              </b-button>
            </template>
          </b-table>
        </b-row>
        <div style="flex: 1;"></div>
        <b-row class="mt-auto h-100">
          <b-col sm="7" md="6" class="mx-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="center"
              hide-goto-end-buttons
            ></b-pagination>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <Modal
      :data="infoModal"
      :title="title"
      :resetInfoModal="resetInfoModal"
      :titleIcon="titleIcon"
    >
      <CreateForm :data="infoModal" />
    </Modal>
  </b-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import ContentSidebar from '../components/ContentSidebar.vue';
import CreateForm from '../views/AddDevice.vue';
import Modal from '../components/Modal.vue';

export default defineComponent({
  components: { CreateForm, ContentSidebar, Modal },
  data() {
    return {
      title: 'Device',
      titleIcon: 'devices',
      addNewText: 'Add Device',
      fields: [
        { key: 'data', label: '#' },
        { key: 'id', label: 'Device ID' },
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'actions', label: '' },
      ],
      items: [
        {
          id: '0000001',
          name: 'mk-gw001',
          description: 'for testing',
        },
        {
          id: '0000002',
          name: 'mk-gw001',
          description: 'for testing',
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
        description: '',
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
      this.infoModal.name = item.name;
      this.infoModal.action.text = action === 'Add' ? 'Add New' : 'Update';
      this.infoModal.description = item.description;
      this.infoModal.in_id = item.id;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.action.text = '';
      this.infoModal.name = '';
      this.infoModal.description = '';
      this.infoModal.in_id = '';
    },
  },
});
</script>
