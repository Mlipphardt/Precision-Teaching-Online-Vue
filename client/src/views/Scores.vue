<template>
  <v-container class="mt-8">
    <v-row>
      <v-col class="text-center">
        <h3>Scores for {{ program.name }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="trials" />
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
        { text: "Per Minute Score", align: "center" },
        { text: "See Chart", align: "center" },
        { text: "Delete", align: "center" },
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
};
</script>

<style></style>
