<template>
  <v-container class="mt-6">
    <div class="back-icon" @click="$router.push('/client-details')">
      <v-icon>mdi-chevron-left</v-icon>
    </div>
    <v-row>
      <v-col cols="2" class="pb-0">
        <v-btn color="#00FF00" dark @click="programDialog = true"
          ><v-icon class="mr-1">mdi-plus</v-icon>Add Program</v-btn
        >
      </v-col>
      <v-col cols="10" class="pb-0"> </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <h4 class="text-center">Programs for {{ client.initials }}</h4>
      </v-col>
    </v-row>
    <v-row v-if="programs.length > 0 && programs != undefined">
      <v-col>
        <main>
          <ProgramCard
            v-for="program in programs"
            :key="program.id"
            :program="program"
          />
        </main>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="text-center d-flex justify-center">
        <v-card
          width="500"
          height="150"
          class="d-flex text-center align-center justify-center"
        >
          <h4>No programs have been created yet!</h4>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog rounded width="500px" height="600px" v-model="programDialog">
      <v-card class="pa-4">
        <v-row>
          <v-col class="text-center">
            <h3>Add a Program</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0">
            <v-text-field
              v-model="name"
              :error="programNameErrors ? true : false"
              :label="programNameErrors ? '* Program Name' : 'Program Name'"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <v-select
              :items="measureOptions"
              v-model="measure"
              :error="programMeasureErrors ? true : false"
              :label="programMeasureErrors ? '* Measure' : 'Measure'"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end pt-0">
            <v-btn dark color="#00FF00" @click="addProgram"
              >Add<v-icon class="ml-2">mdi-plus</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ProgramCard from "../components/cards/ProgramCard";
import validationMixin from "../mixins/validationMixin";

export default {
  name: "Programs",
  components: {
    ProgramCard,
  },
  mixins: [validationMixin],
  data() {
    return {
      programs: [],
      programDialog: false,
      name: "",
      measureOptions: ["Frequency", "Duration"],
      measure: "",
    };
  },
  created() {
    this.getPrograms();
  },
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
  },
  methods: {
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
    addProgram() {
      console.log("Adding program...");
      let program = {
        name: this.name,
        measure: this.measure,
        client_id: this.client.id,
      };
      if (this.validateProgram(program)) {
        console.log(program);
        this.$store
          .dispatch("program/createProgram", program)
          .then(() => {
            window.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("Errors in program creation form.");
      }
    },
  },
};
</script>

<style></style>
