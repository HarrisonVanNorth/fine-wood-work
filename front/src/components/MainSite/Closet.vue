<template>
  <b-row id="row">
    <h2>Closets</h2>
    <div id="imgdiv"
      v-for="image in images" 
      v-bind:key="image.id" 
      @click="modalShow = !modalShow" 
      v-on:click="imgUrl = image.img_url" 
      >
        <b-img 
        style="height:100%; width:100%;"
          :src='image.img_url'
          img-alt="Image"
          fluid-grow
          class=""
        />
      </div>
    <b-modal id="modallg modal-center"
    size="lg" 
    v-model="modalShow" 
    style="height:300px; width:400px"
    body-bg-variant="dark"
    hide-footer=true
    hide-header=true
    >
      <div>
        <img :src="imgUrl" style="height:100%; width:100%;">
      </div>
    </b-modal>
  </b-row>
</template>

<script>

export default {
  name: 'Closet',
  data(){
    return {
      modalShow: false,
      imgUrl: '',
    }
  },
  mounted(){
    this.$store.dispatch('getImages')
  },
  computed: {
    images(){
      return this.$store.state.images.filter(img => img.category === 'closet');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#row {
  padding-top: 12%;
}
#imgdiv {
  height:300px; 
  width:31%; 
  display:inline-block;
  /* padding: 2%; */
  margin: 1%;
  box-shadow: 8px 8px #817e7e;
}
h2 {
  width:100%;
  text-align: center;
}

</style>
