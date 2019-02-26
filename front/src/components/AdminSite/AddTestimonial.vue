<template>
  <b-row class="justify-content-md-center">
    <b-col id="form" cols="6">
      <h3>Add Testimonial</h3>
      <b-form v-on:submit.prevent="onAddTestimonial(content, author, approved)">
        <b-form-group>
          <b-form-textarea v-model="content" class="mt-3" placeholder="Write Here" plain  />
        </b-form-group>
        <b-form-group>
          <b-form-input type='text' v-model="author" placeholder="Author" />
        </b-form-group>
        <b-button style="margin:4%;" type='submit' variant="primary">Submit</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'AddTestimonialVue',
  data() {
    return {
      content: '',
      author: '',
      approved: true
    }
  },
  methods: {
  onAddTestimonial() {
    this.$store.dispatch('postTestimonial', {
    'author': this.author,
    'content': this.content,
    'approved': this.approved
    })
  }
}
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
    background-color: white;
    height: 20%;
}
</style>
