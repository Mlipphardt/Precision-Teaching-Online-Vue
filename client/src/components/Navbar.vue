<template>
  <v-app-bar color="blue" app id="top-bar" height="50px" dark>
    <v-row>
      <v-spacer />
      <v-col class="link-wrapper">
        <span class="link" @click="goto('/')">Home</span>
        <span v-if="!getAuthenticated" class="link" @click="goto('/login')"
          >Login</span
        >
        <span v-else class="link" @click="logoutUser">Logout</span>

        <span class="link" @click="goto('/learnmore')">Learn More</span>
        <span v-if="getAuthenticated" class="link" @click="goto('/clients')"
          >Clients</span
        >
      </v-col>
      <v-spacer />
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getAuthenticated"]),
  },
  methods: {
    goto(text) {
      this.$router.push(text);
    },
    logoutUser() {
      this.$store.dispatch("auth/logoutUser");
    },
  },
};
</script>

<style scoped>
#top-bar {
  margin-top: 74px !important;
}

.link {
  cursor: pointer;
}

.link-wrapper {
  display: flex;
  justify-content: space-around;
  width: 25%;
}

.link:hover {
  font-weight: 500;
  transform: scale(1.05);
}
</style>
