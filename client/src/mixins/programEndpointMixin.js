//Interacts with programs on backend.

module.exports = {
  data() {
    return {
      programs: [],
    };
  },
  computed: {
    client() {
      return this.$store.dispatch("client/getClient");
    },
  },
  methods: {
    getPrograms() {
      this.$store
        .dispatch("program/getClientPrograms", this.client.id)
        .then((res) => {
          this.programs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
