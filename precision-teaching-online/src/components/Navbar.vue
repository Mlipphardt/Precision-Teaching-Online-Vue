<template>
  <v-app-bar color="blue" id="top-bar" height="50px" dark>
      <v-row>
        <v-spacer />
        <v-col class="link-wrapper">
            <span class="link" @click="goto('/')">Home</span>
            <span class="link" @click="goto('/login')">Login</span>
            <span class="link">Clients</span>
            <span class="link">Resources</span>
        </v-col>
        <v-spacer />
      </v-row>
  </v-app-bar>
</template>

<script>
export default {
    methods: {
        goto(text){
            this.$router.push(text)
        }
    }
}
</script>

<style scoped>

#top-bar{
    margin-top: 25px !important;
}

.link{
    cursor: pointer;
}

.link-wrapper{
    display: flex;
    justify-content: space-between;
    width: 25%;
}

</style>