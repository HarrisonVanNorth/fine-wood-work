<template>
  <b-row class="justify-content-md-center">
    <router-link id="link" to="/AdminImg"><strong>Images</strong></router-link> 
    <router-link id="link" to="/AdminTes"><strong>Testimonials</strong></router-link>
    <router-link id="link" to="/SplashPage"><strong>Main Site</strong></router-link>
  </b-row>
</template>

<script>

export default {
  name: 'Links',
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#link {
  color: rgb(255, 255, 255);
  margin: 2% 2%;
  padding-right: 1%;
  border-right: 1px solid #272726;
  border-bottom-right-radius: 5%;
  border-top-right-radius: 5%; 

}
</style>
