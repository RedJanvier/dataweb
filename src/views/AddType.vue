<template>
  <b-form>
    <b-form-group label="Name" horizontal label-for="id-element">
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
