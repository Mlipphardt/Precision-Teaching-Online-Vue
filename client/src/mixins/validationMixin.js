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
    validateEmail(email) {
      console.log("Validating email with the following text: " + email);
    },
  },
};
