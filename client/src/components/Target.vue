<template>
  <v-container>
    <v-card class="trial-card" height="325">
      <v-row class="image-wrapper">
        <v-spacer />
        <v-col cols="6" class="text-center">
          <v-row>
            <v-col>
              <div class="text-center mt-8">
                Starting {{ program.name }} for {{ client.initials }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Timer Options</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="timerOptions"
                v-model="timer"
                @change="updateTimer"
                label="Time (Seconds)"
              ></v-select>
              <span class="error-text" v-show="warningText"
                >Please set a time for the trial.</span
              >
            </v-col>
          </v-row>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <TrialButtons @prepare-trial="prepareTrial" />
      </v-row>
    </v-card>
    <v-dialog v-model="trialDialog" fullscreen>
      <TrialDialog @cancel-trial="cancelTrial" />
    </v-dialog>
  </v-container>
</template>

<script>
import TrialButtons from "./TrialButtons";
import TrialDialog from "./TrialDialog";

export default {
  components: {
    TrialButtons,
    TrialDialog,
  },
  data() {
    return {
      active: false,
      trialDialog: false,
      timer: "",
      timerOptions: ["15", "30", "45", "60"],
      warningText: false,
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
  methods: {
    updateTimer() {
      this.warningText = false;
      this.$store.dispatch("trial/setTimer", this.timer);
    },
    prepareTrial() {
      if (!this.timer) {
        this.warningText = true;
        return;
      }
      this.trialDialog = true;
    },
    cancelTrial() {
      this.trialDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.trial-card {
  margin-top: 46px;
}

.image-wrapper {
  height: 100%;
  width: 100%;
}
</style>
