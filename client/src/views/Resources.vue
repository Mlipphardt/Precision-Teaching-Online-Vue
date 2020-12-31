<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="2" class="pb-0">
        <v-btn color="#00FF00" dark @click="resourceDialog = true"
          ><v-icon class="mr-1">mdi-plus</v-icon>Add Resource</v-btn
        >
      </v-col>
      <v-col cols="10" class="pb-0"> </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <h4 class="text-center">Resources for {{ program.name }}</h4>
      </v-col>
    </v-row>
    <v-row v-if="resources.length > 0 && resources != undefined">
      <v-col>
        <main>
          <ResourceCard
            v-for="resource in resources"
            :key="resource.id"
            :img="resource.image"
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
          <h4>No resources have been added yet!</h4>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog rounded width="500px" height="600px" v-model="resourceDialog">
      <v-card class="pa-4">
        <v-row>
          <v-col class="text-center">
            <h3>Add a Resource</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0">
            <v-file-input v-model="image" label="Upload a picture..." />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end pt-0">
            <v-btn dark color="#00FF00" @click="addResource"
              >Add<v-icon class="ml-2">mdi-plus</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ResourceCard from "../components/cards/ResourceCard";

export default {
  name: "Resources",
  components: {
    ResourceCard,
  },
  data() {
    return {
      resources: [],
      resourceDialog: false,
      name: "",
      resourceOptions: ["Frequency", "Duration"],
      measure: "",
      image: null,
    };
  },
  created() {},
  computed: {
    client() {
      return this.$store.getters["client/getClient"];
    },
    program() {
      return this.$store.getters["program/getProgram"];
    },
  },
  methods: {
    addResource() {
      console.log(this.image);
      let resourceImg = event;
      const resource = new FormData();
      resource.append("image", this.image);
      for (let value of resource.values()) {
        console.log(value);
      }
      this.$store.dispatch("resource/createResource", resource);
    },
    getResources() {
      this.$store
        .dispatch("resource/getProgramResources", this.program.id)
        .then((res) => {
          this.resources = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
