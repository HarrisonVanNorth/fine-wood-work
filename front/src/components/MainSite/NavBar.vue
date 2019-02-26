<template>
  <b-navbar id='navBar'>
    <b-col cols="3" id="imgdiv">
      <b-img src="https://as1.ftcdn.net/jpg/01/30/52/60/500_F_130526046_ILjfFeHjMNktnLLkZ4bIzT0BCsegpQSx.jpg" rounded="circle" alt=""/> 
    </b-col>
    <b-col cols="6" id="linkList">
      <div>
        <h3>Fine Wood Working</h3>
        <router-link id='link' to="/SplashPage">
          <strong>Home</strong>
        </router-link>
        <router-link id='link' to="/Kitchen">Cabinets</router-link> 
        <router-link id='link' to="/Bathroom">Bathrooms</router-link> 
        <router-link id='link' to="/Closet">Closets</router-link>
        <router-link id='link' to="/Testimonials">Testimonials</router-link>
      </div>
    </b-col>
    <b-col cols="3" id="">
      <h2>602-888-888</h2>
      <h2>contact@info.com</h2>
    </b-col>
  </b-navbar>
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
#navBar {
color:  #eee4d2;
background-color: rgba(165, 81, 13, 0.932);
justify-content: center;
z-index: 2;
width: 100%;
position: absolute;
height: 20%;
}

#linkList {
    width:100%;
    height: 100%;
    margin-top: 5%

}

#link {
  color:  #272726;
  margin: 2% 2%;
  padding-right: 1%;
  border-right: 1px solid #272726;
  border-bottom-right-radius: 5%;
  border-top-right-radius: 5%; 
}

#imgdiv {
  height: 100%;
  padding: 0 7.5%;
}

h1 {
  text-transform: uppercase;
    color:  #eee4d2;

}


h2{
  color:  #eee4d2;
  text-align: right;
  margin: 0%;
  font-family: "Times New Roman", Times, serif;
}

img {
  height: 100%;
  width: 100%;
  margin-bottom: 2% 6%;

}

</style>
