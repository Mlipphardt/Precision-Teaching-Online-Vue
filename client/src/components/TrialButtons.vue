<template>
  <v-container>
    <v-row class="shrink-col-top">
      <v-col class="shrink-col-top text-center">
        <v-btn class="success" @click="prepareTrial"> Begin </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    trialSwitch() {
      console.log("Switching trial status");
    },
    prepareTrial() {
      this.$emit("prepare-trial");
    },
  },
};
</script>

<style>
.shrink-col-top {
  padding-top: 0px !important;
}
</style>
