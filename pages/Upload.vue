<!-- <template>
  <v-file-input 
    clearable 
    label="File input"
    variant="filled"
    prepend-icon="mdi-camera"
  />
</template>
<script>
export default {
    layout: "homelayout",
  };
</script> -->
<template>
  <div class="file-upload">
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
                    v-model="FileValid" 
                    lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="username"
                          :rules="loginEmailRules"
                          label="*username"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="loginpassword"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show3 ? 'text' : 'password'"
                          name="input-10-1"
                          label="*Password"
                          hint="At least 6 characters"
                          counter
                          @click:append="show = !show"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="dishname"
                          :rules="[rules.required]"
                          label="*dishname"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="dishprice"
                          :rules="[rules.required]"
                          label="*$price"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-file-input
                          clearable
                          label="*File input"
                          variant="filled"
                          prepend-icon="mdi-camera"
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
                          @click="Upload"
                        >
                          Upload
                        </v-btn>
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
    <VMessages 
      :value="errorBucket" 
      color="error" />
  </div>
</template>

<script>
import VInput from "vuetify/lib/components/VInput/VInput.js";
export default {
  name: "FileUpload",
  layout: "homelayout",
  extends: VInput,
  props: {
    value: {
      required: true,
      type: [Array, FileList],
    },
  },
  data() {
    return {
      username:"",
      loginpassword:"",
      dishname:"",
      dishprice:"",
      dialog: true,
      tab: 0,
      FileValid: true,
      show:false,
      tabs: [{ name: "UploadDish", icon: "mdi-silverware" }],
      loginEmailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 6) || "Min 6 characters",
      },
    };
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(value) {
        if (value) {
          this.files = value;
        }
      },
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.file-upload {
  margin-top: 5px;

  .drop-area {
    cursor: pointer;
    border: 2px lightgray dashed;
    width: 100%;
    display: block;
  }

  .v-input__slot {
    display: block;
  }

  .v-label {
    top: -7px;
  }
}
</style>
