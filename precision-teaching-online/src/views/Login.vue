<template>
    <v-container class="wrapper d-flex justify-center align-center flex-column">
        <v-card width="600" class="mb-12 pa-8">
            <v-row>
                <v-spacer />
                <v-col class="text-center">
                    <h2>{{signup ? "Login" : "Sign Up"}}</h2>
                </v-col>
                <v-spacer />
            </v-row>
            <v-row>
                <v-spacer />
                <v-col cols=8>
                    <v-text-field
                      v-model="username"
                      label="Username"
                    >
                    </v-text-field>
                </v-col>
                <v-spacer />
            </v-row>            
            <v-row>
                <v-spacer />
                <v-col cols=8>
                    <v-text-field
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
                    <v-btn color="primary" depressed>Submit</v-btn>
                </v-col>
                <v-spacer />
            </v-row>
            <v-row>
                <v-spacer />
                <v-col cols=5 class="text-center">
                    <span class="signup-text" @click="signupSwitch">{{signup ? "Not a member? Sign up!" : "Already a member? Log in!"}}</span>
                </v-col>
                <v-spacer />
            </v-row>            
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            username: "",
            password: "",
            signup: false,
        }
    },
    methods: {
        signupSwitch(){
            this.signup = !this.signup
        }

    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    height: 100%;
    width: 100%;
}

.signup-text{
    font-size: 16px;
    color: red;
    cursor: pointer;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>