<template>
  <v-container class="wrapper mt-5">
    <v-row>
      <v-spacer />
      <v-col>
        <h3 class="mt-3 text-center">Client Details</h3>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-3">
          <v-row>
            <v-col class="d-flex justify-center">
              Programs
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn dark color="#00FF00">See All</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-3">
          <v-row>
            <v-col class="d-flex justify-center">
              Trial History
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn dark color="#00FF00">See All </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClientDetails",
  data() {
    return {
      programs: [],
      trials: [],
    };
  },
  created() {
    //API calls will go here.
  },
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
</style>
