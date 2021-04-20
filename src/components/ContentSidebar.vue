<template>
  <div>
    <div class="page-header d-flex justify-content-between">
      <h4 class="d-flex align-center">
        <md-icon style="font-size: 36px !important; margin-right: 1rem;">{{
          titleIcon
        }}</md-icon>
        <span>{{ title }}</span>
      </h4>
      <b-button
        :class="addNew !== true ? 'd-none' : 'p-0'"
        variant="transparent"
        style="font-size: 12px"
        @click="addNewFx({}, $event.target, addNewText)"
      >
        <md-icon
          style="font-size: 16px !important;"
          class="material-icon-outlined"
          >note_add</md-icon
        >
        <span>Add New</span>
      </b-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    titleIcon: {
      type: String,
    },
    addNew: {
      type: Boolean,
    },
    addNewText: {
      type: String,
    },
    addNewFx: {
      type: Function,
    },
  },
  created() {
    console.log(this.addNew);
  },
});
</script>
