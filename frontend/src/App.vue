<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <SplashPage/>
  </div>
</template>

<script>
import SplashPage from './components/MainSite/SplashPage'
import NavBar from './components/MainSite/NavBar'

export default {
  name: 'app',
  components: {
    SplashPage
  }
}
</script>

<style>
#app {

}
</style>
