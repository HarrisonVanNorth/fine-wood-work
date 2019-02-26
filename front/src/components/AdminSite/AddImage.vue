<template>
  <b-row class="justify-content-md-center">
    <b-col id="form" cols="6">
      <h3>Add Image</h3>
      <b-form v-on:submit.prevent="onUpload(upload, selected)">
        <b-form-group>

        <b-form-file type="file" v-model="upload" accept=".jpg, .png, .gif" class="mt-3" plain />
        </b-form-group>

        <b-form-group>
          <b-form-select v-model="selected" :options="options" />
        </b-form-group>

        <b-button style="margin:4%;" type='submit' variant="primary">Submit</b-button>
      </b-form>
      <app-alert></app-alert>
    </b-col>
  </b-row>
</template>

<script>
import Alert from './Alert.vue'

export default {
  name: 'AddImageVue',
    components: {
    'app-alert': Alert,
    },
  data() {
    return {
      upload: null,
      selected: null,
      options:[
        {value: null, text: 'Select Category'},
        {value: 'kitchen', text: 'Kitchen'},
        {value: 'closet', text: 'Closet'},
        {value: 'bathroom', text: 'Bathroom'},
        {value: 'furniture', text: 'Furniture'},
        {value: 'custom', text: 'Custom'}
      ],
    }
  },
  methods: {
  onUpload() {
    this.$store.dispatch('postUpload', {
    'upload': this.upload,
    'category':this.selected,
    })
  },
}
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#form {
    background-color: white;
}

</style>
