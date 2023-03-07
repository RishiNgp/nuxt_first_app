<template>
  <v-app>
    <v-dialog 
      v-model="dialog" 
      persistent 
      max-width="600px" 
      min-width="360px">
      <div>
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="deep-purple accent-4"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="purple darken-4" />
          <v-tab 
            v-for="(i, Keys) in tabs" 
            :key="Keys">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form 
                  ref="loginForm" 
                  v-model="valid1" 
                  lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="username"
                        :rules="loginEmailRules"
                        label="username*"
                        variant="outlined"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginpassword"
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password*"
                        variant="outlined"
                        hint="At least 6 characters"
                        counter
                        @click:append="show3 = !show3"
                      />
                    </v-col>
                    <v-col 
                      class="d-flex" 
                      cols="12" 
                      sm="6" 
                      xsm="12" />
                    <v-spacer />
                    <v-col 
                      class="d-flex" 
                      cols="12" 
                      sm="3" 
                      xsm="12" 
                      align-end>
                      <v-btn
                        :disabled="!valid1"
                        x-large
                        block
                        color="success"
                        @click="validate"
                      >
                        Login
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form 
                  ref="registerForm" 
                  v-model="valid" 
                  lazy-validation>
                  <v-row>
                    <v-col 
                      cols="12" 
                      sm="6" 
                      md="6">
                      <v-text-field
                        v-model="firstName"
                        :rules="[rules.required]"
                        label="First Name*"
                        maxlength="20"
                        required
                      />
                    </v-col>
                    <v-col 
                      cols="12" 
                      sm="6" 
                      md="6">
                      <v-text-field
                        v-model="lastName"
                        :rules="[rules.required]"
                        label="Last Name*"
                        maxlength="20"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password*"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="verify"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, passwordMatch]"
                        :type="show2 ? 'text' : 'password'"
                        block
                        name="input-10-1"
                        label="Confirm Password*"
                        counter
                        @click:append="show2 = !show2"
                      />
                    </v-col>
                    <v-spacer />
                    <v-col 
                      class="d-flex ml-auto" 
                      cols="12" 
                      sm="3" 
                      xsm="12">
                      <v-btn
                        :disabled="!valid"
                        x-large
                        block
                        color="success"
                        @click="register"
                      >Register</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-dialog>
  </v-app>
</template>

<script>
//import { validate } from 'json-schema';
import { mapActions } from "vuex";

export default {
  layout: "custom",
  data() {
    return {
      dialog: true,
      tab: 0,
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
      ],
      username: "",
      loginpassword: "",
      password: "",
      valid: true,
      valid1:true,
      firstName: "",
      lastName: "",
      email: "",
      verify: "",
      loginEmail: "",
      loginEmailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      emailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      show1: false,
      show2: false,
      show3: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 6) || "Min 6 characters",
      },
    };
  },

  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  watch: {
    dialog() {
      
      









      
      this.$refs.form.resetValidation();
    },
  },

  methods: {
    ...mapActions({
      Userlogin:'login/Userlogin',
  }),
  ...mapActions({
    UserRegister:'register/UserRegister',
  }),
    async validate(){
      const User = new FormData();
      User.append("username", this.username);
      User.append("loginpassword", this.loginpassword);
      // console.log( User.get('loginpassword'));
      try{
        if(this.$refs.loginForm.validate()){
          await this.Userlogin(User)
          this.$router.push("/home");
        }

      }catch(error){
        console.log(error)
      }
    },
    // validate() {
    //   if (this.$refs.loginForm.validate()) {
    //     // submit form to server/API here...
    //     localStorage.setItem("username", this.username);
    //     localStorage.setItem("password", this.loginpassword);
    //     this.$router.push("/home");
    //   }
    // },
   async register() {

      const form = new FormData();
      form.append("firstName", this.firstName);
      form.append("lastName", this.lastName);
      form.append("email", this.email);
      form.append("password", this.password);
      // console.log( User.get('loginpassword'));
      try{
        if(this.$refs.registerForm.validate()){
          await this.UserRegister(form);
          this.$router.push("/home");
        }

      }catch(error){
        console.log(error)
      }
    },
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
  },
};
</script>
<style scoped>
div[aria-required="true"].v-input .v-label::after {
  content: " *";
  color: red;
}
</style>
