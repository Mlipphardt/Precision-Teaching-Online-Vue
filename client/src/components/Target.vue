<template>
  <v-container>
    <v-card class="trial-card" height="325">
      <v-row class="image-wrapper">
        <v-spacer />
        <v-col
          cols="6"
          class="text-center d-flex justify-center align-center flex-column"
        >
          <div class="text-center">
            Starting {{ program.name }} for {{ client.initials }}
          </div>
          <div class="mt-10">Timer Options</div>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <TrialButtons />
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import TrialButtons from "./TrialButtons";

export default {
  components: {
    TrialButtons,
  },
  data() {
    return {
      active: false,
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
