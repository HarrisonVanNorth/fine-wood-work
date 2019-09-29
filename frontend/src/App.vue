<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import SplashPage from './components/MainSite/SplashPage'
import NavBar from './components/MainSite/NavBar'

export default {
  name: 'app',
  components: {
    'SplashPage': SplashPage
  }
}
</script>

<style>
#app {

}
</style>
