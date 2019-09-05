<template>
  <div>
    <b-row>
      <b-col >
        <router-link to="/AdminImg"><strong>Images /</strong></router-link> 
        <router-link to="/AdminTes"><strong>Testimonials /</strong></router-link>
        <router-link to="/SplashPage"><strong>Main Site</strong></router-link>
      </b-col>
    </b-row>
  </div>
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

</style>
