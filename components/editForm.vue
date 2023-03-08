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
          <v-tab>
            <v-icon large>{{ tabs.icon }}</v-icon>
            <div class="caption py-1">{{ tabs.name }}</div>
          </v-tab>
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
                      <!-- <v-text-field
                        v-model="List.dishItemNumber"
                        :rules="[rules.required]"
                        variant="outlined"
                        type="number"
                        min="0"
                        label="ItemNo*"
                        required
                      /> -->
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="List.dishName"
                        :rules="[rules.required]"
                        variant="outlined"
                        label="Dishname*"
                        type="text"
                        pattern="[a-zA-Z]+"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="List.dishPrice"
                        :rules="[rules.required]"
                        type="number"
                        min="0"
                        label="₹Price*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="List.dishQuantity"
                        :rules="[rules.required]"
                        label="Quantity*"
                        type="number"
                        min="1"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="List.dishCalories"
                        :rules="[rules.required]"
                        label="Calories*"
                        type="number"
                        min="0"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="List.dishImage"
                        :rules="[rules.required]"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick a dish"
                        prepend-icon="mdi-camera"
                        label="Dish"
                      />
                    </v-col>
                    <v-col 
                      class="d-flex" 
                      cols="12" 
                      sm="3" 
                      xsm="12"
                      align-end />
                    <!-- <v-btn 
                        x-large 
                        block 
                        color="error" 
                        @click="Fetch">
                        Fetch
                      </v-btn> -->
                    <!-- </v-col> -->
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
                        :disabled="!editDishNameValid"
                        x-large
                        block
                        color="success"
                        @click="editMenu"
                      >
                        Update
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer/>
                  </v-card-actions>
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
      dishItemNumber: '',
      dishcalories:'',
      dishquantity:'',
      dialog: true,
      tab: 0,
      editDishPriceValid: true,
      editDishNameValid: true,
      editDishImageValid: true,

      tabs: 
        { name: "Update Menu", 
        icon: "mdi-silverware" },
      
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
      return this.$store.getters["addMenu/FormData"];
    },
   
},

  methods: {
    ...mapActions("addMenu", ["actionEditMenu"]),

    editMenu() { 
      console.log(this.List)
      try {
        if (this.$refs.editDishNameValid.validate()&&(this.List.dishQuantity>0)) {
          // const editData = {
          //   dishName: this.List.dishName,
          //   dishItemNumber: this.List.dishItemNumber,
          //   dishQuantity:this.List.dishQuantity,
          //   dishCalories:this.List.dishCalories,
          //   dishImage:this.List.dishImage,
          //   dishPrice:this.List.dishPrice
          // };
          // console.log(editData);
          console.log("Inside if",this.List)
          this.actionEditMenu(this.List);
          
        }else{
          this.$toasted.global.ngegative_quantity();
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.dialog = false;
        this.$emit("close-editForm");
      }
    },
    cancel() {

      console.log(this.List)
      this.$emit("close-editForm");
    },
  },
};
</script>
<style></style>
MenuLis
