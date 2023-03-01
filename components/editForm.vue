<template>
  <v-app>
    <v-dialog
      v-model="dialog"
      hide-overlay
      transition="dialog-bottom-transition"
      persistent
      max-width="600px"
      min-width="360px"
    >
      <div>
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="red accent-1"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="red accent-1" />
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
                  ref="editDishPriceValid"
                  v-model="editDishPriceValid"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishItemNo"
                        :rules="[rules.required]"
                        type="number"
                        label="ItemNo*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishprice"
                        :rules="[rules.required]"
                        type="number"
                        label="₹Price*"
                        required
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
                        x-large 
                        block 
                        color="error" 
                        @click="cancel">
                        Cancel
                      </v-btn>
                    </v-col>
                    <v-col 
                      class="d-flex" 
                      cols="12" 
                      sm="3" 
                      xsm="12" 
                      align-end>
                      <v-btn
                        :disabled="!editDishPriceValid"
                        x-large
                        block
                        color="success"
                        @click="editPrice"
                      >
                        Save
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
                  ref="editDishNameValid"
                  v-model="editDishNameValid"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishItemNo"
                        :rules="[rules.required]"
                        type="number"
                        label="ItemNo*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishname"
                        :rules="[rules.required]"
                        label="Dishname*"
                        required
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
                        x-large 
                        block 
                        color="error" 
                        @click="cancel">
                        Cancel
                      </v-btn>
                    </v-col>
                    <v-col 
                      class="d-flex ml-auto" 
                      cols="12" 
                      sm="3" 
                      xsm="12">
                      <v-btn
                        :disabled="!editDishNameValid"
                        x-large
                        block
                        color="success"
                        @click="editName"
                      >Save</v-btn
                      >
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
                  ref="editDishImageValid"
                  v-model="editDishImageValid"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishItemNo"
                        :rules="[rules.required]"
                        type="number"
                        label="ItemNo*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="dishimage"
                        :rules="[rules.required]"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick a dish"
                        prepend-icon="mdi-camera"
                        label="Dish"
                        required
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
                        x-large 
                        block 
                        color="error" 
                        @click="cancel">
                        Cancel
                      </v-btn>
                    </v-col>
                    <v-col 
                      class="d-flex ml-auto" 
                      cols="12" 
                      sm="3" 
                      xsm="12">
                      <v-btn
                        :disabled="!editDishImageValid"
                        x-large
                        block
                        color="success"
                        @click="editImage"
                      >Save</v-btn
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
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      dishprice: "",
      dishname: "",
      dishimage: [],
      dishItemNo: "",
      dialog: true,
      tab: 0,
      editDishPriceValid: true,
      editDishNameValid: true,
      editDishImageValid: true,

      tabs: [
        { name: "EditDishPrice", icon: "mdi-currency-inr" },
        { name: "EditDishName", icon: "mdi-silverware-variant" },
        { name: "EditDishImage", icon: "mdi-account-circle" },
      ],
      Filerules: [
        (value) => {
          return (
            !value ||
            !value.length ||
            value[0].size < 2000000 ||
            "Avatar size should be less than 2 MB!"
          );
        },
      ],
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
  computed: {
    List() {
      return this.$store.getters["addMenu/MenuList"];
    },
  },
  methods: {
    ...mapActions("addMenu", ["changeName","changePrice","changeImage"]),
    async editName() {
      try {
        if (this.$refs.editDishNameValid.validate()) {
          const editData = {
            dishName: this.dishname,
            itemNumber: this.dishItemNo,
          };
          await this.changeName(editData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Inside the editName Finally");
        this.dialog = false;
        this.$emit("close-editForm");
      }
    },
    async editPrice() {
      try {
        if (this.$refs.editDishPriceValid.validate()) {
          const editData = {
            dishPrice: this.dishprice,
            itemNumber: this.dishItemNo,
          };
          await this.changePrice(editData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Inside the editName Finally");
        this.dialog = false;
        this.$emit("close-editForm");
      }
    },
   async editImage() {
        try {
        if (this.$refs.editDishImageValid.validate()) {
            const image= URL.createObjectURL(this.dishimage)
          const editData = {
            
            dishImage: image,
            itemNumber: this.dishItemNo,
          };
          await this.changeImage(editData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Inside the editName Finally");
        this.dialog = false;
        this.$emit("close-editForm");
      }
    },
    cancel() {
      this.$emit("close-editForm");
    },
  },
};
</script>
<style></style>
MenuLis
