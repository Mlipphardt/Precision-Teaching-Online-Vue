<template>
  <v-container class="mt-8">
    <v-row>
      <v-col class="text-center d-flex justify-center">
        <h3 class="mr-3">Scores for {{ program.name }}</h3>
        <v-icon @click="generateChart()">mdi-chart-line</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="trials">
          <template v-slot:item.converted="props">
            {{ perMinuteScore(props.item) }}
          </template>
          <template v-slot:item.delete="props">
            <v-btn
              color="#8B0000"
              :alt="props"
              dark
              @click="deleteTrial(props.item)"
              >Delete</v-btn
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      trials: [],
      headers: [
        {
          text: "Time",
          align: "center",
          value: "time",
        },
        {
          text: "Score",
          align: "center",
          value: "score",
        },
        { text: "Per Minute Score", align: "center", value: "converted" },
        { text: "Delete", align: "center", value: "delete" },
      ],
    };
  },
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
    program() {
      return this.$store.getters["program/getProgram"];
    },
  },
  created() {
    this.$store
      .dispatch("trial/getProgramTrials", this.program.id)
      .then((res) => {
        this.trials = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteTrial(trial) {
      console.log("Deleting trial: ");
      console.log(trial);
      this.$store
        .dispatch("trial/deleteTrialByID", trial.id)
        .then(() => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    perMinuteScore(trial) {
      let scores = trial.score.split("/");
      let correct = scores[0];
      let incorrect = scores[1];
      let convertToMinute = 60 / parseInt(trial.time);
      correct = correct * convertToMinute;
      incorrect = incorrect * convertToMinute;
      return `${Math.round(correct)}/${Math.round(incorrect)}`;
    },
    generateChart() {
      console.log("Generating chart for scores...");
    },
  },
};
</script>

<style></style>
