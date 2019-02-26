<template>
<div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000 height:100%; width:100%;"
      fade
      interval="10000"
    >
      <b-carousel-slide img-src="http://blog.coldwellbankerluxury.com/wp-content/uploads/2017/10/BLOG_LIsaAdams_Carlyle_HisClosetOverall_A_HR.jpg" />
      <b-carousel-slide img-src="https://i.pinimg.com/originals/67/6b/a1/676ba1dd19a79be334657265eff7ef80.jpg" />
      <b-carousel-slide img-src="https://static-11.sinclairstoryline.com/resources/media/48bcfc41-14c5-43e5-9547-e8e977ab9236-OTM2930BelkayLane12.JPG" />
    </b-carousel>
</div>
</template>

<script>

export default {
  name: 'SplashPage',
  data(){
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#carousel-fade {
  height: 100vh;
}

</style>
