<template>
  <b-row class="justify-content-md-center">
        <div id="imgdiv" 
        v-for="image in images" 
        v-bind:key="image.id" 
      >
      <b-card>
        <span class="d-flex"><h6>File: </h6> {{ image.key }} </span>
        <span class="d-flex"><h6>Category: </h6> {{ image.category }} </span>
        
        <b-img 
        style="height:100%; width:100%;"
          :src='image.img_url'
          img-alt="Image"
        />
      </b-card>
      </div>
  </b-row>
</template>

<script>

export default {
  name: 'ImageListVue',
  mounted(){
    this.$store.dispatch('getImages')
  },
  computed: {
    images(){
      return this.$store.state.images;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-right: 4%;
  background-color: white;
}

.card {
  padding: 0%;
  flex-direction: inherit;
}

#imgdiv {
  height:20; 
  width:31%; 
  display:inline-block;
  /* padding: 2%; */
  margin: 1%;
  }
</style>
