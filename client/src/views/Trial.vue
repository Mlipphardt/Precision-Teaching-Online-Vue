<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="8">
        <Target />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import Target from "../components/Target";

export default {
  components: {
    Target,
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    console.log("Fetching program information...");
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
    doStuff() {
      console.log("Doing stuff!");
    },
  },
};
</script>

<style></style>
