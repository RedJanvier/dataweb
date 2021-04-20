<template>
  <b-modal
    centered
    size="lg"
    hide-footer
    :id="data.id"
    :title="data.title"
    @hide="resetInfoModal"
    header-text-variant="light"
    header-bg-variant="primary"
  >
    <template #modal-header="{ close }" class="d-flex align-center">
      <h3 class="my-auto d-flex align-center">
        <md-icon style="font-size: 36px !important; margin-right: 1rem;">{{
          titleIcon
        }}</md-icon>
        <span>{{ title }}</span>
      </h3>
      <h6 class="my-auto">{{ data.title }}</h6>
      <b-button
        size="lg"
        variant="transparent"
        class="text-light mb-5"
        @click="close()"
      >
        <md-icon>close</md-icon>
      </b-button>
    </template>

    <template #default="{ok}">
      <b-form-row class="d-flex justify-content-end">
        <b-form-group>
          <b-button v-if="data.in_id" variant="danger">DELETE</b-button>
        </b-form-group>
      </b-form-row>
      <b-form class="w-50 mx-auto mb-5">
        <slot></slot>
        <b-form-row class="d-flex justify-content-center">
          <b-button @click="ok()" class="mx-auto px-5" variant="primary">
            {{ data.action.text }}
          </b-button>
        </b-form-row>
      </b-form>
    </template>
  </b-modal>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data', 'resetInfoModal', 'title', 'titleIcon'],
});
</script>
