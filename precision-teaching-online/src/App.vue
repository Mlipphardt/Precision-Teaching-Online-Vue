<template>
  <v-app>
      <LogoBar />
      <Navbar />
    <!-- <v-container> -->
      <router-view/>
      <Footer />
    <!-- </v-container> -->
  </v-app>
</template>

<script>
import LogoBar from "./components/LogoBar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default {
  components: {
    LogoBar,
    Navbar,
    Footer
  },
  data(){
    return {

    }
  }
}
</script>

<style>
html, body{
  height: 100% !important;
  width: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  overflow-x: hidden !important;
}

</style>
