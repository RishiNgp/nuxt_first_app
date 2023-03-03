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
                      <v-text-field
                        v-model="dishItemNo"
                        variant="outlined"
                        type="number"
                        label="ItemNo*"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishname"
                        label="Dishname*"
                        type="text"
                        pattern="[a-zA-Z]+"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishprice"
                        type="number"
                        label="₹Price*"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishquantity"
                        :rules="[rules.required]"
                        label="Quantity*"
                        type="number"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="dishcalories"
                        :rules="[rules.required]"
                        label="Calories*"
                        type="number"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="dishimage"
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
                      align-end >
                      <v-btn 
                        x-large 
                        block 
                        color="error" 
                        @click="Fetch">
                        Fetch
                      </v-btn>
                    </v-col>
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
      dishItemNo: '',
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
watch:{

},
  methods: {
    ...mapActions("addMenu", ["actionEditMenu"]),
    Fetch(){
     this.dishprice = this.List.dishPrice
     this.dishname = this.List.dishName
     this.dishimage= this.List.dishPhoto
     this.dishItemNo =this.List.dishItemNumber
     this.dishcalories=this.List.dishCalories
     this.dishquantity=this.List.dishQuantity
    },
    editMenu() { 
      try {
        if (this.$refs.editDishNameValid.validate()) {
          const image=URL.createObjectURL(this.dishimage)
          const editData = {
            MenuName: this.dishname,
            MenuItemNo: this.dishItemNo,
            MenuQuantity:this.dishquantity,
            MenuCalories:this.dishprice,
            MenuImage:image,
            MenuPrice:this.dishprice
          };
          this.actionEditMenu(editData);
        }
      } catch (error) {
        console.log("error occured");
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
