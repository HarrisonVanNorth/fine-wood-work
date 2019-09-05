<template>
  <div id="app">
      <app-navBar v-if="!isAdmin"></app-navBar>
      <app-header v-else></app-header>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/MainSite/NavBar.vue'
import Header from '@/components/AdminSite/Header.vue'



export default {
  name: 'App',
    components: {
    'app-navBar': NavBar,
    'app-header' : Header
  },
  data(){
    return {
      links: ['AdminImg', 'AdminTes', 'Login']
    }
  },
  computed: {
    isAdmin: function() {
      const result = this.links.includes(this.$route.name)
      return result
    }
  }
    }
</script>

<style>

</style>
