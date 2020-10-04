<template>
  <v-app>
    <v-container>
      <LogoBar />
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import LogoBar from "./components/LogoBar"

export default {
  components: {
    LogoBar
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
