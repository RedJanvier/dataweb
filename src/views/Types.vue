<template>
  <b-container>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <h2>Type list</h2>
        <b-button
          @click="editInfo({ name: '', id: '' }, $event.target, 'Add Type')"
          variant="primary"
          >Add new</b-button
        >
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
            @click="editInfo(row.item, $event.target, 'Edit Type')"
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
import CreateForm from '../views/AddType';

export default defineComponent({
  components: {
    CreateForm,
  },
  data() {
    return {
      borderless: true,
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'actions', label: '' },
      ],
      items: [
        { id: '0000001', name: 'Temperature' },
        { id: '0000002', name: 'Humidity' },
        { id: '0000003', name: 'Water' },
        { id: '0000004', name: 'Air' },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 2,
      pageOptions: [2, 15, 25],
      infoModal: {
        id: 'info-modal',
        title: '',
        name: '',
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
      this.infoModal.in_id = item.in_id;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.name = '';
      this.infoModal.in_id = '';
    },
  },
});
</script>
