<template>
  <div>
    <b-alert
      :show="Alert"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    > Success! </b-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data(){
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  computed: {
    Alert(){
      console.log(this.$store.state.alert)
      return this.$store.state.alert
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
