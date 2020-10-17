<template>
  <div class="logo-bar d-flex justify-center align-center flex-column text-center">
    <h1 @click="goHome" class="logo-text mt-5">Precision Teaching Online</h1>
  </div>
</template>

<script>
export default { 
  methods: {
    goHome(){
      this.$router.push("/")
    }
  }

}
</script>

<style scoped>

.logo-bar{
    width: 100%;
    height: 75px;
}

.logo-text{
    color: blue;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    cursor: pointer;
}

</style>