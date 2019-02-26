<template>
  <b-navbar type="dark">
    <b-col cols="2">
      <b-navbar-brand>FineWoodWork</b-navbar-brand>
    </b-col>
    <b-col cols="2" md="6" offset-md="9">
      <b-button>Log Out</b-button>
    </b-col>
  </b-navbar>
</template>
<script>

export default {
  name: 'app-header',
  data(){
    return {
      title: 'Admin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
background-color: rgba(165, 81, 13, 0.932);

}
</style>
