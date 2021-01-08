<template>
  <v-card height="150" width="250">
    <v-row>
      <v-col class="text-center pb-0">
        <h3>{{ program.name }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around pb-0 mt-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              dark
              color="#AA0000"
              v-bind="attrs"
              v-on="on"
              @click="manageProgramResources"
              ><v-icon>mdi-notebook</v-icon></v-btn
            >
          </template>
          <span>Manage Resources</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab dark color="#00AAFF" v-bind="attrs" v-on="on"
              ><v-icon>mdi-school</v-icon></v-btn
            >
          </template>
          <span>See Scores</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              dark
              color="#00FF00"
              v-bind="attrs"
              v-on="on"
              @click="runTrial"
              ><v-icon>mdi-lead-pencil</v-icon></v-btn
            >
          </template>
          <span>Run a Trial</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    program: {
      type: Object,
      required: true,
    },
  },
  methods: {
    manageProgramResources() {
      this.$store.dispatch("program/setProgram", this.program);
      this.$router.push("/resources");
    },
    runTrial() {
      this.$store.dispatch("program/setProgram", this.program);
      this.$router.push("/trial");
    },
  },
};
</script>

<style></style>
