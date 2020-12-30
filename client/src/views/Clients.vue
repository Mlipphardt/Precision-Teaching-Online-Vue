<template>
  <v-container class="mt-10 wrapper">
    <v-row>
      <v-col cols="2">
        <v-btn color="#00FF00" dark @click="registerDialog = true"
          ><v-icon class="mr-1">mdi-plus</v-icon>Add Client</v-btn
        >
      </v-col>
      <v-col cols="10"> </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col class="d-flex justify-space-between align-center">
        <v-card
          v-for="(client, index) in clients"
          :key="index"
          height="100px"
          width="200px"
          class="client-card text-center d-flex align-center justify-center mr-5 ml-5 mb-10"
          color="primary"
          @click="go(client)"
        >
          <span class="client-title">{{ client.initials }}</span>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog width="500px" height="600px" v-model="registerDialog">
      <v-card class="pa-3">
        <v-row>
          <v-col>
            <v-text-field v-model="clientInitials" label="Client Initials" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end pt-0">
            <v-btn dark color="#00FF00" @click="addClient"
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
      registerDialog: false,
      clients: [],
      clientInitials: "",
    };
  },
  computed: {
    user_id() {
      return localStorage.getItem("user_id")
        ? localStorage.getItem("user_id")
        : "1";
    },
  },
  created() {
    this.fetchClients();
  },
  methods: {
    addClient() {
      let newClient = {
        initials: this.clientInitials,
        user_id: this.user_id,
      };
      this.$store.dispatch("client/createClient", newClient);
      console.log(newClient);
    },
    fetchClients() {
      console.log("Fetching clients...");
      this.$store
        .dispatch("client/getUserClients", this.user_id)
        .then((res) => {
          this.clients = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    go(client) {
      this.$store.dispatch("client/setClient", client);
      this.$router.push("/client-details");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100% !important;
  width: 100%;
}

.client-title {
  color: white;
}

.client-card {
  cursor: pointer;
  border-radius: 30px;
}

.client-card:hover {
  transform: scale(1.05);
  font-weight: 500;
}
</style>
