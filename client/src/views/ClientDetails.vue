<template>
  <v-container class="wrapper mt-8">
    <div class="back-icon" @click="$router.push('/client-details')">
      <v-icon>mdi-chevron-left</v-icon>
    </div>
    <v-row>
      <v-spacer />
      <v-col>
        <h3 class="mt-3 text-center">Client Management</h3>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <h4 class="text-center">{{ client.initials }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-3">
          <v-row>
            <v-col class="d-flex justify-center">
              <h3>Programs</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn dark color="#00FF00" @click="goToPrograms">
                <v-icon class="mr-1">mdi-cog</v-icon>
                Manage</v-btn
              >
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
    this.getPrograms();
    this.getTrials();
  },
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
  },
  methods: {
    goToPrograms() {
      this.$router.push("/programs");
    },
    getPrograms() {
      this.$store
        .dispatch("program/getClientPrograms", this.client.id)
        .then((res) => {
          this.programs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTrials() {
      this.$store
        .dispatch("trial/getClientTrials", this.client.id)
        .then((res) => {
          this.trials = res;
        })
        .catch((err) => {
          console.log(err);
        });
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
