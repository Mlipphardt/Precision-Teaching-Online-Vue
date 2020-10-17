<template>
  <v-container class="wrapper d-flex align-center justify-space-between">
      <v-card 
        v-for="(client, index) in clients" 
        :key="index"
        height="100px"
        width="200px"
        class="client-card text-center d-flex align-center justify-center mr-5 ml-5 mb-10"
        color="primary"
      >
        <span class="client-title">{{client}}</span>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return {
            clients: ["AA", "BB", "CC", "DD", "EE", "FF"],
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper{
    height: 100%;
    width: 100%;
}

.client-title{
    color: white;
}

.client-card{
    cursor: pointer;
    border-radius: 30px;
}

.client-card:hover{
    transform: scale(1.05);
    font-weight: 500;
}

</style>