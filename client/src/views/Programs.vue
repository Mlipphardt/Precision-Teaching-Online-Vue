<template>
  <v-container>
    <v-row class="mt-6">
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
    <v-row v-if="programs">
      <v-col class="d-flex justify-space-between"> </v-col>
    </v-row>
    <v-row else>
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
            <v-text-field v-model="name" label="Program Name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <v-select :items="measureOptions" v-model="measure"></v-select>
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
export default {
  data() {
    return {
      programs: [],
      programDialog: false,
      name: "",
      measureOptions: ["Frequency", "Duration"],
      measure: "",
    };
  },
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
  },
  methods: {
    addProgram() {
      console.log("Adding program...");
      let program = {
        name: this.name,
        measure: this.measure,
        client_id: this.client.id,
      };
      console.log(program);
      this.$store.dispatch("program/createProgram", program);
    },
  },
};
</script>

<style></style>
