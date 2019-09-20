<template>
  <b-row class="justify-content-md-center">
    <h3>Testimonials to be approved</h3>
    <b-list-group>
      <b-list-group-item style="max-width: 50rem;" class="mb-2" v-for="testimonial in testimonials" v-bind:key="testimonial.id">
        <span class="d-flex"><h6>Author: </h6> {{ testimonial.author }} </span>
        <span class="d-flex"><h6>Content: </h6> {{ testimonial.content }} </span>
        <b-button v-on:click.prevent="onApproved(testimonial.id)" variant="outline-primary">Click to Approve</b-button>
        <b-button v-on:click.prevent="onRemove(testimonial.id)" variant="outline-danger">Click to Remove</b-button>
      </b-list-group-item>
    </b-list-group>
  </b-row>
</template>

<script>

export default {
  name: 'TestimonialList',
  mounted(){
    this.$store.dispatch('getTestimonials')
  },
  computed: {
    testimonials(){
      return this.$store.state.testimonials.filter(testimonial => !testimonial.approved);
    }
  },
  methods: {
    onApproved(id){
      this.$store.dispatch('putApproved',  id )
    },
    onRemove(id){
      this.$store.dispatch('postRemove', id )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
