<template>
  <div class="d-flex align-center justify-center flex-column mt-1 rel-div">
    <div class="exit-icon" @click="cancelTrial">
      <v-icon color="#FF0000" large>mdi-close</v-icon>
    </div>
    <img :src="imageLink" style="height: 75vh" />
    <span class="mt-1">Time: {{ time }}</span>
    <v-btn
      class="mt-3"
      :color="trialActive ? 'success' : 'primary'"
      dark
      @click="handleClick"
    >
      {{ trialActive ? "Next Image" : "Begin" }}
    </v-btn>
    <v-btn
      color="primary"
      dark
      v-show="trialActive"
      class="mt-3"
      @click="resetTrial"
      >Reset Trial</v-btn
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      resources: [],
      currentResource: null,
      baseUrl: "https://precisionteachingonline.s3.amazonaws.com/",
      currentIndex: 0,
      imageLink: "",
      trialActive: false,
    };
  },
  created() {
    this.$store
      .dispatch("resource/getProgramResources", this.program.id)
      .then((res) => {
        this.resources = res;
        this.nextImage();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    ...mapState("trial", ["time"]),
    client() {
      return this.$store.getters["client/getClient"];
    },
    program() {
      return this.$store.getters["program/getProgram"];
    },
    combinedUrl() {
      return (
        this.baseUrl + this.currentResource.id + this.currentResource.image
      );
    },
  },
  methods: {
    cancelTrial() {
      this.$emit("cancel-trial");
    },
    resetTrial() {
      this.trialActive = false;
      this.$store.dispatch("trial/clearTimer");
    },
    handleClick() {
      if (!this.trialActive) {
        this.trialActive = true;
        this.$store.dispatch("trial/startTrial");
      }
      this.nextImage();
    },
    nextImage() {
      let randomTarget = Math.floor(Math.random() * this.resources.length);
      this.currentResource = this.resources[randomTarget];
      this.constructImageLink();
    },
    constructImageLink() {
      this.imageLink =
        this.baseUrl + this.currentResource.id + this.currentResource.image;
    },
  },
};
</script>

<style scoped lang="scss">
.target-image {
  width: 100%;
  height: 90vh;
}

.rel-div {
  position: relative;
}
</style>
