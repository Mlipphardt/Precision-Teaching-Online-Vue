<template>
  <v-container>
      <v-card class="trial-card" height="325">
          <v-row class="image-wrapper">
              <v-spacer />
              <v-col cols=6 class="image-wrapper">
                  <div class="text-center d-flex justify-center align-center image-wrapper">
                  The trial image or text will be placed here.
                  </div>
              </v-col>
              <v-spacer />
          </v-row>
          <v-row>
                <TrialButtons />
          </v-row>
      </v-card>
  </v-container>
</template>

<script>
import TrialButtons from "./TrialButtons"

export default {
    components: {
        TrialButtons
    },
    data(){
        return {
            active: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .trial-card{
        margin-top: 46px;
    }

    .image-wrapper{
        height: 100%;
        width: 100%;
    }
</style>