<template>
  <b-form>
    <b-form-group label="Name" label-align="left">
      <b-form-input :value="data.name" placeholder="Input value"></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
});
</script>
