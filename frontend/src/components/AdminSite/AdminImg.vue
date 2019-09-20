<template>
  <div>
    <app-links></app-links>
    <b-row>
      <b-col>
        <app-add-image></app-add-image>
        <br>
        <app-del-image></app-del-image>
      </b-col>
      <b-col>
        <app-image-list></app-image-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Links from './Links.vue'
import AddImageVue from './AddImage.vue';
import DelImageVue from './DelImage.vue';
import ImagelistVue from './Imagelist.vue';

export default {
  name: 'AdminImg',
  components: {
    'app-links': Links,
    'app-add-image': AddImageVue,
    'app-del-image': DelImageVue,
    'app-image-list': ImagelistVue,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
