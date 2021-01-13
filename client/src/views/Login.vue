<template>
  <v-container class="wrapper d-flex justify-center align-center flex-column">
    <v-card width="600" class="mb-12 pa-8">
      <v-row>
        <v-spacer />
        <v-col class="text-center">
          <h2>Login</h2>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="8">
          <v-text-field v-model="email" label="Email"> </v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="8">
          <v-text-field
            @keyup.enter="logIn"
            v-model="password"
            label="Password"
            type="password"
          >
          </v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col class="text-center">
          <v-btn color="primary" @click="logIn" depressed>Submit</v-btn>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="5" class="text-center">
          <span class="signup-text" @click="signupSwitch">
            Not a member? Sign up!
          </span>
        </v-col>
        <v-spacer />
      </v-row>
    </v-card>
    <div class="register-dialog-wrapper">
      <v-dialog v-model="registerDialog" fullscreen>
        <v-row class="max-height background">
          <v-col class="register-background" cols="7"> </v-col>
          <v-col
            class="d-flex flex-column justify-center align-center pt-0 pb-0 relative"
          >
            <v-icon class="exit-icon" @click="signupSwitch" large>
              mdi-close
            </v-icon>
            <v-card width="90%" class="pa-3">
              <v-row>
                <v-col class="d-flex justify-center">
                  <h3>Register Now</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="thin-form">
                  <v-text-field
                    v-model="email"
                    :error="emailErrors"
                    :label="emailErrors ? '* Email' : 'Email'"
                  >
                  </v-text-field>
                  <span class="error-text" :class="emailErrors ? '' : 'hide'"
                    >Please provide a valid email.</span
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col class="thin-form">
                  <v-text-field
                    class="pb-0"
                    v-model="password"
                    :error="passwordErrors"
                    :label="passwordErrors ? '* Password' : 'Password'"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                  <span class="error-text" :class="passwordErrors ? '' : 'hide'"
                    >Passwords must be at least six characters long.</span
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col class="thin-form">
                  <v-select
                    :items="occupationList"
                    :label="occupationErrors ? '* Occupation' : 'Occupation'"
                    v-model="occupation"
                    :error="occupationErrors"
                  ></v-select>
                  <span
                    class="error-text"
                    :class="occupationErrors ? '' : 'hide'"
                    >Required.</span
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-end">
                  <v-btn dark color="blue" @click="register">
                    Register
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import validationMixin from "../mixins/validationMixin";

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
      occupation: "",
      occupationList: [
        "Board-Certified Behavior Analyst",
        "Board-Certified assistant Behavior Analyst",
        "Registered Behavior Technician",
        "Speech Therapist",
        "Other",
      ],
      registerDialog: false,
      showPassword: false,
    };
  },
  methods: {
    signupSwitch() {
      if (!this.registerDialog) {
        this.email = "";
        this.password = "";
      }
      this.occupation = "";
      this.registerDialog = !this.registerDialog;
    },
    register() {
      let user = {
        email_address: this.email.toLowerCase(),
        password: this.password,
        position: this.occupation,
      };
      if (this.validateRegister(user)) {
        console.log("Validation success!");
        this.$store.dispatch("auth/registerUser", user);
        this.signupSwitch();
      } else {
        console.log("Validation failure, please correct the errors.");
      }
    },
    logIn() {
      let user = {
        email_address: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/loginUser", user);
    },
  },
};
</script>

<style lang="scss">
.v-dialog--fullscreen {
  background-color: #ffffff;
}

.thin-form {
  .v-text-field__details {
    display: none !important;
  }
}
</style>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
}

.signup-text {
  font-size: 16px;
  color: red;
  cursor: pointer;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.register-background {
  height: 100%;
  background-image: url("../assets/teaching-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
