<template>
  <b-container>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <h2>Alert list</h2>
        <b-button
          @click="editInfo({}, $event.target, 'Add Alert')"
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
        <template #cell(condition)="row">
          <b-form-select :value="row.item.condition">
            <b-form-select-option value="in">in</b-form-select-option>
            <b-form-select-option value="out">out</b-form-select-option>
            <b-form-select-option value="range in"
              >range in</b-form-select-option
            >
          </b-form-select>
        </template>
        <template #cell(actions)="row">
          <b-button
            size="sm"
            @click="editInfo(row.item, $event.target, 'Edit Alert')"
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
import CreateForm from '../views/AddAlert';

export default defineComponent({
  components: { CreateForm },
  data() {
    return {
      borderless: true,
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'upper', label: 'Upper Limit' },
        { key: 'lower', label: 'Lower Limit' },
        { key: 'condition', label: 'Condition' },
        { key: 'interval', label: 'Interval' },
        { key: 'actions', label: '' },
      ],
      items: [
        {
          id: '0000001',
          upper: 30,
          lower: 0,
          condition: 'in',
          interval: '30min',
        },
        {
          id: '0000002',
          upper: -5,
          lower: -10,
          condition: 'out',
          interval: '15min',
        },
        {
          id: '0000003',
          upper: -5,
          lower: 5,
          condition: 'range in',
          interval: '0min',
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 2,
      pageOptions: [2, 15, 25],
      infoModal: {
        id: 'info-modal',
        title: '',
        upper: '',
        lower: '',
        condition: '',
        interval: '',
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
      this.infoModal.upper = item.upper;
      this.infoModal.lower = item.lower;
      this.infoModal.condition = item.condition;
      this.infoModal.interval = item.interval;
      this.infoModal.in_id = item.id;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.upper = '';
      this.infoModal.lower = '';
      this.infoModal.condition = '';
      this.infoModal.interval = '';
      this.infoModal.in_id = '';
    },
  },
});
</script>
