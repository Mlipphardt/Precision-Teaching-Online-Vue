<template>
  <v-container>
      <v-row class="shrink-col-top">
          <v-col class="shrink-col-top text-center">
              <v-btn class="primary" @click="trialSwitch">{{started ? "Cancel" : "Start"}}</v-btn>
          </v-col>
          <v-col class="shrink-col-top text-center">
            <v-btn class="success" v-if="started"> Next </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return {
            started: true
        }
    },
    methods: {
        trialSwitch(){
            console.log("Switching trial status")
        }
    }
}
</script>

<style>

.shrink-col-top{
    padding-top: 0px !important;
}

</style>