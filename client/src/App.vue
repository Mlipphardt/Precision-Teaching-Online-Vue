<template>
  <v-app class="background">
    <LogoBar />
    <Navbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import LogoBar from "./components/LogoBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    LogoBar,
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../public/styles.css";
</style>
