//Mixin for validating user inputs.

export default {
  data() {
    return {
      validated: false,
    };
  },
  methods: {
    validateTextField(text) {
      console.log("Validating text field with the following text: " + text);
    },
  },
};
