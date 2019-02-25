<template>
  <b-container id="main">
    <b-row id="title">
      <b-col cols="9">
        <h3>Testimonials</h3>
      </b-col>
      <b-col cols="3" style="text-align: right;">
        <b-button variant="outline-dark" @click="modalShow = !modalShow">Submit a testimonial! </b-button>
      </b-col>
    </b-row>
    <b-list-group>
      <b-list-group-item id="listItem" v-for="testimonial in testimonials" v-bind:key="testimonial.id">
        <span class="d-flex"><h6>Author: </h6> {{ testimonial.author }} </span>
        <span class="d-flex"><h6>Content: </h6> {{ testimonial.content }} </span>
      </b-list-group-item>
    </b-list-group>
    <b-modal id="modallg modal-center"
    size="lg" 
    v-model="modalShow" 
    style="height:300px; width:400px"
    body-bg-variant="light"
    hide-footer=true
    hide-header=true
    >
      <div>
        <b-row>
          <b-col>
            <h2>Add Testimonial</h2>
            <b-form v-on:submit.prevent="onAddTestimonial(content, author, approved)" @click="modalShow = !modalShow">
              <b-form-group>
                <b-form-textarea v-model="content" class="mt-3" placeholder="Write Here" plain  />
              </b-form-group>
              <b-form-group>
                <b-form-input type='text' v-model="author" placeholder="Author" />
              </b-form-group>
              <b-button type='submit' @click="modalShow = !modalShow" variant="primary">Submit</b-button>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </b-modal>
      <!-- <b-carousel id="carousel-fade" fade>
        <b-carousel-slide img-src="http://blog.coldwellbankerluxury.com/wp-content/uploads/2017/10/BLOG_LIsaAdams_Carlyle_HisClosetOverall_A_HR.jpg" />
        <b-carousel-slide img-src="https://i.pinimg.com/originals/67/6b/a1/676ba1dd19a79be334657265eff7ef80.jpg" />
        <b-carousel-slide img-src="https://static-11.sinclairstoryline.com/resources/media/48bcfc41-14c5-43e5-9547-e8e977ab9236-OTM2930BelkayLane12.JPG" />
      </b-carousel> -->
  </b-container>
</template>

<script>

export default {
  name: 'Testimonial',
  data(){
    return {
      modalShow: false,
      content: '',
      author: '',
      approved: true
    }
  },
  mounted(){
    this.$store.dispatch('getTestimonials')
  },
  computed: {
    testimonials(){
      return this.$store.state.testimonials.filter(testimonial => testimonial.approved);
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
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  padding-top: 12%;
}
#listItem {
  box-shadow: 10px 10px #817e7e;
  margin-bottom: 2%;
}
#title {
  display:flex;
  margin-bottom: 2%;
}
#carousel-fade {
  height: 100vh;
  z-index: -20;
  opacity: .5;
}
h3 {
  padding-bottom: 5% 0%;
  text-shadow: 1px 1px #817e7e;
  color: #6b1414;
}


</style>
