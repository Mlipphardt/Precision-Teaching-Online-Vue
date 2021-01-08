<template>
  <v-card
    width="165px"
    class="d-flex justify-center align-center pa-2 relative-card"
  >
    <div class="exit-icon" @click="deleteResource">
      <v-icon small color="#FF0000">mdi-close</v-icon>
    </div>
    <img :src="combinedUrl" alt="Program resource" class="resource-img" />
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: "https://precisionteachingonline.s3.amazonaws.com/",
    };
  },
  computed: {
    combinedUrl() {
      return this.baseUrl + this.id + this.img;
    },
  },
  methods: {
    deleteResource() {
      console.log("Deleting resource...");
      this.$store
        .dispatch("resource/deleteResourceByID", this.id)
        .then(() => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.relative-card {
  position: relative;
}

.exit-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #ffffff;
  border-radius: 50% !important;
  cursor: pointer;
}

.resource-img {
  max-width: 150px;
  height: auto;
}
</style>
