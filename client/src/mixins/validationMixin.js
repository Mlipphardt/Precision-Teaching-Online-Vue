//Mixin for validating user inputs.

export default {
  data() {
    return {
      validated: false,
      validationErrors: [],
      emailErrors: false,
      passwordErrors: false,
      occupationErrors: false,
    };
  },
  methods: {
    validateRegister(user) {
      this.validated = true;
      this.emailErrors = false;
      this.passwordErrors = false;
      this.occupationErrors = false;

      if (!this.validateEmail(user.email_address)) {
        this.emailErrors = true;
        this.validated = false;
      }
      if (!this.validatePassword(user.password)) {
        this.passwordErrors = true;
        this.validated = false;
      }
      if (!this.validateSelect(user.position)) {
        this.occupationErrors = true;
        this.validated = false;
      }
      return this.validated;
    },
    checkNotEmpty(string) {
      if (string === "" || string === undefined || string === null) {
        return true;
      } else {
        return false;
      }
    },
    validateTextField(text) {
      //Array of errors
      let errors = [];
      console.log("Validating text field with the following text: " + text);

      //Not empty
      if (this.checkNotEmpty(text)) {
        errors.push("Required.");
      }
    },
    validateEmail(email) {
      console.log("Validating email with the following text: " + email);

      let errors = [];

      //Not empty
      if (this.checkNotEmpty(email)) {
        errors.push("Required.");
      }

      //Fits valid email format
      let emailRegex = /^\w+@\w+.\w+$/;
      if (!emailRegex.test(email)) {
        errors.push("Please provide a valid email address.");
      }

      if (errors.length === 0) {
        console.log("Validation success: Email");
        return true;
      } else {
        console.log("Validation failed: Email");
        console.log(errors);
        return false;
      }
    },
    validatePassword(password) {
      console.log("Validating password with the following text: " + password);

      let errors = [];

      //Not empty
      if (this.checkNotEmpty(password)) {
        errors.push("Required.");
      }

      //Length is at least 6 characters.
      if (password.length < 6) {
        errors.push("Passwords must be at least 6 characters in length.");
      }

      //No illegal characters
      if (password.indexOf(" ") > -1 || password.indexOf(";") > -1) {
        errors.push("Please provide a valid password.");
      }

      if (errors.length === 0) {
        console.log("Validation success: Password");
        return true;
      } else {
        console.log("Validation failed: Password");
        return false;
      }
    },
    validateSelect(string) {
      let errors = [];
      if (this.checkNotEmpty(string)) {
        errors.push("Required.");
      }
      if (errors.length === 0) {
        console.log("Validation success: Select");
        return true;
      } else {
        console.log("Validation failed: Select");
        return false;
      }
    },
  },
};
