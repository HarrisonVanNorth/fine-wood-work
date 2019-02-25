<template>
<b-row class="justify-content-md-center">
  <b-col cols="6">
    <b-form v-on:submit.prevent="onLogin(username, password)">

      <b-form-group label="Username">
        <b-form-input  type="text" placeholder="Enter username" v-model="username" />
      </b-form-group>

      <b-form-group label="Pass Word:">
        <b-form-input type="text" placeholder="Enter password" v-model="password" />
      </b-form-group>

      <b-button type='submit' variant="primary">Submit</b-button>
    </b-form>
  </b-col>
</b-row>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch('postLogin', {
      'username': this.username,
      'password':this.password,
      })
      this.$router.push('/AdminImg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
