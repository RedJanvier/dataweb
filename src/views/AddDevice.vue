<template>
  <div>
    <b-form-group label="name" class="long" label-align="left">
      <b-form-input :value="data.name" placeholder="Input value"></b-form-input>
    </b-form-group>

    <b-form-group label="description" class="long" label-align="left">
      <b-form-input
        :value="data.description"
        placeholder="Input value"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
});
</script>
