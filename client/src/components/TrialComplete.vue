<template>
  <v-card height="250" width="500" class="pa-4" v-if="trialCompleteStep == 1">
    <v-row>
      <v-col class="text-center">
        <h3>Trial complete!</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          :label="correctError ? '* Correct' : 'Correct'"
          :error="correctError ? true : false"
          v-model="correct"
        />
      </v-col>
      <v-col>
        <v-text-field
          :label="incorrectError ? '* Incorrect' : 'Incorrect'"
          :error="incorrectError ? true : false"
          v-model="incorrect"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end pb-0">
        <v-btn color="danger" dark class="mr-2" @click="discardTrial"
          >Discard Trial</v-btn
        >
        <v-btn color="success" dark @click="saveTrial">Save Trial</v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-card height="140" width="500" class="pa-4" v-else>
    <v-row>
      <v-col class="text-center">
        <h3>Trial recorded! Start another trial for this program?</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around align-center">
        <v-btn color="danger" dark @click="returnToProgramMenu">No</v-btn>
        <v-btn color="success" dark @click="restartTrial">Yes</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    program: {
      type: Object,
    },
    client: {
      type: Object,
    },
  },
  data() {
    return {
      correct: 0,
      incorrect: 0,
      correctError: false,
      incorrectError: false,
      trialCompleteStep: 1,
    };
  },
  computed: {
    ...mapState("trial", ["savedTime"]),
    score() {
      return `${this.correct.toString()}/${this.incorrect.toString()}`;
    },
  },
  methods: {
    returnToProgramMenu() {
      this.$router.push("/programs");
    },
    restartTrial() {
      this.discardTrial();
      this.trialCompleteStep = 1;
    },
    discardTrial() {
      this.correct = 0;
      this.incorrect = 0;
      this.$emit("discard-trial");
    },
    saveTrial() {
      console.log("Saving trial...");
      if (
        Number.isNaN(parseInt(this.correct)) &&
        Number.isNaN(parseInt(this.incorrect))
      ) {
        this.correctError = true;
        this.incorrectError = true;
        return;
      } else if (Number.isNaN(parseInt(this.correct))) {
        this.correctError = true;
        return;
      } else if (Number.isNaN(parseInt(this.incorrect))) {
        this.incorrectError = true;
        return;
      }
      let trial = {
        program_id: this.program.id,
        client_id: this.client.id,
        time: this.savedTime,
        score: this.score,
      };
      this.$store.dispatch("trial/saveTrial", trial);
      this.trialCompleteStep = 2;
      console.log(trial);
    },
  },
};
</script>

<style></style>
