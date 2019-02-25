<template>
  <b-navbar type="dark" variant="info">
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

</style>
