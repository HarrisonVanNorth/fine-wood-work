<template>
  <div>
    <app-NavBar></app-NavBar>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'SplashPage',
  components: {
    'app-NavBar': NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#carousel-fade {
  height: 100vh;
}

</style>
