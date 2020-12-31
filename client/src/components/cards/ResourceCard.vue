<template>
  <v-card>
    <img :src="img" alt="Program resource" />
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
