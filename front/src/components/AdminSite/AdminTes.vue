<template>
  <div>
    <app-links></app-links>
    <b-container>
      <b-col>
        <app-add-testimonial></app-add-testimonial>
      </b-col>
      <b-col>
        <app-testimonial-list></app-testimonial-list>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Links from './Links.vue'
import AddTestimonial from './AddTestimonial.vue'
import TestimonialList from './TestimonialList.vue'



export default {
  name: 'AdminTes',
  components: {
    'app-links': Links,
    'app-add-testimonial': AddTestimonial,
    'app-testimonial-list': TestimonialList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color:  #272726;
}

.container {
  background-color:  #272726;
  height: 100vh;

}
</style>
