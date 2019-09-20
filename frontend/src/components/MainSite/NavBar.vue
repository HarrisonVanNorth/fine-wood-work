<template>
  <b-navbar id='navBar'>
    <b-col cols="3" id="imgdiv">
      <b-img src="http://hybridfinewoodworking.com/images/services/4.png" rounded="circle" alt=""/> 
    </b-col>
    <b-col cols="6" id="linkList">
      <div>
        <h3>Fine Wood working</h3>
        <router-link style="color:#6b1414;" id='link' to="/SplashPage"><strong>Home</strong></router-link>
        <!-- <router-link id='link' to="/Testimonials"><strong>About</strong></router-link> -->
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
color: white;
background-color: #000;
justify-content: center;
opacity: .9;
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
  color:  #3b3b3a;
  margin: 2% 2%;
  padding-right: 1%;
  border-right: 1px solid #3b3b3a;
  border-bottom-right-radius: 5%;
  border-top-right-radius: 5%; 
}

#contact{
  color:  #805e20;;
}

#imgdiv {
  height: 90%;
  padding: 0 8%;
}

h2{
  color:#6b1414;
  text-align: right;
  margin:0%;
  font-family: "Times New Roman", Times, serif;
}

img {
  height: 100%;
  width: 100%;
  margin-bottom: 2% 6%;

}

</style>
