<template>
  <v-app id="inspire">
    <v-main class="main">
      <SideBarLeft />
      <SideBarRight />
      <v-container>
        <v-toolbar 
          flat 
          class="">
          <v-row>
            <v-col 
              cols="12" 
              sm="10">
              <v-text-field
                v-model="searchTerm"
                prepend-inner-icon="fas fa-search"
                label="Search"
                filled
                rounded
                dense
                solo
                flat
                background-color="grey lighten-3"
                @input="search"
              />
            <!-- <v-btn 
                class=""
                @click="search"><v-icon>fas fa-search</v-icon> Search
              </v-btn> -->
            <!-- </v-form>  -->
            </v-col>
            <v-col 
              cols="12" 
              sm="2">
              <v-select 
                :items="items" 
                class="">  Filter </v-select>
            </v-col>
          </v-row>
        </v-toolbar>

        <v-row class="mt-n9">
          <v-col 
            cols="12" 
            sm="6">
            <v-toolbar 
              class="" 
              flat>
              <h5>My Filtres:</h5>
              <v-icon 
                class="ml-1" 
                small>fas fa-car-side</v-icon>
              <h5 class="ml-1">First Meal</h5>
              <v-chip 
                class="ma-2" 
                color="green" 
                text-color="white" 
                dense>
                <v-avatar left>
                  <v-icon>fas fa-running</v-icon>
                </v-avatar>
                After Training
              </v-chip>
              <v-spacer />
              <!-- <h6 class="green--text">ADD</h6> -->
              <v-btn 
                class="green--text" 
                @click="showUpload">ADD</v-btn>
              <span v-if="showChild">
                <Upload 
                  @upload-image="upload" 
                  @close-dialog="closeDialog" />
              </span>
            </v-toolbar>
          </v-col>
          <v-col 
            cols="12" 
            sm="6">
            <v-toolbar 
              class="" 
              flat>
              <h5>Popular Filtres:</h5>
              <v-icon 
                class="ml-1" 
                small>fas fa-child</v-icon>
              <h5 class="ml-1">Slim Waist</h5>
              <v-spacer />
              <v-icon 
                class="ml-1" 
                small>fas fa-birthday-cake</v-icon>
              <h5 class="ml-1">Diet</h5>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-toolbar 
          class="pl-0 mt-n7" 
          flat>
          <h4>345</h4>
          <h4 class="grey--text text--lighten-1 ml-2">Meals found</h4>
          <v-spacer />
          <h4 class="grey--text text--lighten-1">Sorted by:</h4>
          <h4 class="ml-1">Recommended</h4>
          <v-icon 
            class="ml-1" 
            small>fas fa-chevron-down</v-icon>
        </v-toolbar>

        <span v-if="preview_list[0] == null">
          <v-row class="mt-n6">  
            <v-col 
              cols="12" 
              sm="4">
              <v-hover 
                v-slot="{ hover }" 
                open-delay="200">
                <v-card 
                  :elevation="hover ? 16 : 2" 
                  color="red lighten-5">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <v-chip
                      class="ma-2"
                      color="black"
                      text-color="white"
                      dense
                    >
                      <v-avatar left>
                        <v-icon color="yellow">fas fa-star</v-icon>
                      </v-avatar>
                      4.2
                    </v-chip>
                    <v-spacer />

                    <v-btn 
                      class="" 
                      fab 
                      x-small 
                      color="white">
                      <v-icon> far fa-heart </v-icon>
                    </v-btn>
                  </v-app-bar>
                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-img src="0.png" />
                  </div>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h5 class="ml-1 grey--text text-lighten-3">
                      Cabage Salad
                    </h5>
                    <v-chip
                      class="ma-2"
                      color="grey lighten-3"
                      text-color="red"
                      dense
                    >
                      250g
                    </v-chip>
                  </v-app-bar>
                  <h5 class="ml-5 mt-n5">₹4.99</h5>
                </v-card>
              </v-hover>
            </v-col>
            <v-col 
              cols="12" 
              sm="4">
              <v-hover 
                v-slot="{ hover }" 
                open-delay="200">
                <v-card 
                  :elevation="hover ? 16 : 2" 
                  color="blue lighten-5">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <v-chip 
                      class="ma-2" 
                      color="black" 
                      text-color="white" 
                      dense>
                      <v-avatar left>
                        <v-icon color="yellow">fas fa-star</v-icon>
                      </v-avatar>
                      4.5
                    </v-chip>
                    <v-spacer />

                    <v-btn 
                      class="" 
                      fab 
                      x-small 
                      color="white">
                      <v-icon> far fa-heart </v-icon>
                    </v-btn>
                  </v-app-bar>
                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-img src="1.png" />
                  </div>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h5 class="ml-1 grey--text text-lighten-3">Noodle salad</h5>
                    <v-chip
                      class="ma-2"
                      color="grey lighten-3"
                      text-color="red"
                      dense
                    >
                      300g
                    </v-chip>
                  </v-app-bar>
                  <h5 class="ml-5 mt-n5">₹6.30</h5>
                </v-card>
              </v-hover>
            </v-col>
            <v-col 
              cols="12" 
              sm="4">
              <v-hover 
                v-slot="{ hover }" 
                open-delay="200">
                <v-card 
                  :elevation="hover ? 16 : 2" 
                  color="green lighten-5">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <v-chip 
                      class="ma-2" 
                      color="black" 
                      text-color="white" 
                      dense>
                      <v-avatar left>
                        <v-icon color="yellow">fas fa-star</v-icon>
                      </v-avatar>
                      5.0
                    </v-chip>
                    <v-spacer />

                    <v-btn 
                      class="" 
                      fab 
                      x-small 
                      color="white">
                      <v-icon> far fa-heart </v-icon>
                    </v-btn>
                  </v-app-bar>
                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-img src="3.png" />
                  </div>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)" 
                    class="mt-2">
                    <h5 class="ml-1 grey--text text-lighten-3">Vegetable mix</h5>
                    <v-chip
                      class="ma-2"
                      color="grey lighten-3"
                      text-color="red"
                      dense
                    >
                      400g
                    </v-chip>
                  </v-app-bar>
                  <h5 class="ml-5 mt-n5">$5.99</h5>
                </v-card>
              </v-hover>
            </v-col>
            <v-col 
              cols="12" 
              sm="4">
              <v-hover 
                v-slot="{ hover }" 
                open-delay="200">
                <v-card 
                  :elevation="hover ? 16 : 2" 
                  color="teal  lighten-5">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <v-chip 
                      class="ma-2" 
                      color="black" 
                      text-color="white" 
                      dense>
                      <v-avatar left>
                        <v-icon color="yellow">fas fa-star</v-icon>
                      </v-avatar>
                      4.4
                    </v-chip>
                    <v-spacer />

                    <v-btn 
                      class="" 
                      fab 
                      x-small 
                      color="white">
                      <v-icon> far fa-heart </v-icon>
                    </v-btn>
                  </v-app-bar>
                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-img src="4.png" />
                  </div>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h5 class="ml-1 grey--text text-lighten-3">Seafood soup</h5>
                    <v-chip
                      class="ma-2"
                      color="grey lighten-3"
                      text-color="red"
                      dense
                    >
                      350g
                    </v-chip>
                  </v-app-bar>
                  <h5 class="ml-5 mt-n5">$6.10</h5>
                </v-card>
              </v-hover>
            </v-col>
            <v-col 
              cols="12" 
              sm="4">
              <v-hover 
                v-slot="{ hover }" 
                open-delay="200">
                <v-card 
                  :elevation="hover ? 16 : 2" 
                  color="purple lighten-5">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <v-chip 
                      class="ma-2" 
                      color="black" 
                      text-color="white" 
                      dense>
                      <v-avatar left>
                        <v-icon color="yellow">fas fa-star</v-icon>
                      </v-avatar>
                      4.7
                    </v-chip>
                    <v-spacer />

                    <v-btn 
                      class="" 
                      fab 
                      x-small 
                      color="white">
                      <v-icon> far fa-heart </v-icon>
                    </v-btn>
                  </v-app-bar>
                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-img src="8.png" />
                  </div>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)" 
                    class="mt-n6">
                    <h5 class="ml-1 grey--text text-lighten-3">
                      Stewed vegetables
                    </h5>
                    <v-chip
                      class="ma-2"
                      color="grey lighten-3"
                      text-color="red"
                      dense
                    >
                      400g
                    </v-chip>
                  </v-app-bar>
                  <h5 class="ml-5 mt-n5">$4.99</h5>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </span>
        <span v-else-if="Menu.length>0&&searchTerm!=''">
          <template>
            <v-row class="mt-n6">
              <v-col
                v-for="(item, ind) in Menu"
                :key="ind"
                col="12"
                sm="4"
              >
                <v-hover 
                  v-slot="{ hover }" 
                  open-delay="200">
                  <v-card 
                    :elevation="hover ? 16 : 2" 
                    color="red lighten-5">
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <v-chip 
                        class="ma-2" 
                        color="black" 
                        text-color="white" 
                        dense>
                        <v-avatar left>
                          <v-icon color="yellow">fa fa-star</v-icon>
                        </v-avatar>
                        4.2
                      </v-chip>
                      <v-spacer />
                      <v-btn 
                        class="" 
                        fab 
                        x-small 
                        color="white">
                        <v-icon 
                          @click="addCart(item, ind)"
                        >fa fa-cart-plus
                        </v-icon>
                      </v-btn>
                    </v-app-bar>
                    <div
                      class="d-flex flex-column justify-space-between align-center dish-img"
                    >
                      <v-img
                        :src="item.MenuImage"
                      />
                    </div>
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <h5 class="ml-1 grey--text text-lighten-3">
                        {{ item.MenuName }}
                      </h5>
                      <v-chip
                        class="ma-2"
                        color="grey lighten-3"
                        text-color="red"
                        dense
                      >
                        {{ item.MenuQuantity }}
                      </v-chip>
                    </v-app-bar>
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <h5 class="ml-5 mt-n5">₹{{ item.MenuPrice }}</h5>
                      <v-spacer />
                      <v-btn 
                        class="" 
                        fab 
                        x-small 
                        color="white">
                        <v-icon 
                          @click="deleteFromMenu(item, ind)"
                        >fa fa-trash
                        </v-icon>
                      </v-btn>
                      <v-spacer />
                      <v-icon @click="editMenuItem(item,ind)">fas fa-edit</v-icon>
                      <span v-if="editButton">
                        <editForm 
                          @close-editForm="editMenuClose"
                      /></span>
                    </v-app-bar>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </template>
        <!-- <v-btn @click="Back">BACK</v-btn> -->
        </span>
        <span v-else>
          <template>
            <v-row class="mt-n6">
              <v-col
                v-for="(item, ind) in preview_list"
                :key="ind"
                col="12"
                sm="4"
              >
                <v-hover 
                  v-slot="{ hover }" 
                  open-delay="200">
                  <v-card 
                    :elevation="hover ? 16 : 2" 
                    color="red lighten-5">
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <v-chip 
                        class="ma-2" 
                        color="black" 
                        text-color="white" 
                        dense>
                        <v-avatar left>
                          <v-icon color="yellow">fa fa-star</v-icon>
                        </v-avatar>
                        4.2
                      </v-chip>
                      <v-spacer />
                      <v-btn 
                        class="" 
                        fab 
                        x-small 
                        color="white">
                        <v-icon 
                          @click="addCart(item, ind)"
                        >fa fa-cart-plus
                        </v-icon>
                      </v-btn>
                    </v-app-bar>
                    <div
                      class="d-flex flex-column justify-space-between align-center dish-img"
                    >
                      <v-img
                        :src="item.MenuImage"
                        width="180px"
                        height="180px"
                        contain
                      />
                    
                    </div>
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <h5 class="ml-1 grey--text text-lighten-3">
                        {{ item.MenuName }}
                      </h5>
                      <v-chip
                        class="ma-2"
                        color="grey lighten-3"
                        text-color="red"
                        dense
                      >
                        {{ item.MenuQuantity }}
                      </v-chip>
                    </v-app-bar>
                    <v-app-bar 
                      flat 
                      color="rgba(0,0,0,0)">
                      <h5 class="ml-5 mt-n5">₹{{ item.MenuPrice }}</h5>
                      <v-spacer />
                      <v-btn 
                        class="" 
                        fab 
                        x-small 
                        color="white">
                        <v-icon 
                          @click="deleteFromMenu(item, ind)"
                        >fa fa-trash
                        </v-icon>
                      </v-btn>
                      <v-spacer />
                      <v-icon @click="editMenuItem(item,ind)">fas fa-edit</v-icon>
                      <span v-if="editButton">
                        <editForm 
                          @close-editForm="editMenuClose"
                      /></span>
                    </v-app-bar>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </template>
        </span>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-btn 
            class="px-15 mt-2" 
            rounded 
            outlined 
            color="green" 
            dark>
            <v-icon class="mr-1"> fas fa-spinner </v-icon>
            Load More
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import { get } from "http";
import { mapActions } from "vuex";
import debounce from 'lodash/debounce';
export default {
  layout: "custom",
  data() {
    return {
      form:{},
      Menu:[],
      items:['First Meal','Slim Waist'],
      searchTerm:'',
      drawer: null,
      showChild: false,
      editButton: false,
      dishItemNo: 0,
    };
  },
  computed: {
    preview_list: {
      get(){
      // this.Menu=this.$store.state.addMenu.menu;
      return this.$store.state.addMenu.menu;
    },
    },
    // debouncedFunction() {
    //   return debounce(this.search, 2000);
    // }
    check(){
      return this.searchTerm
    }
  },
  watch: {
    // searchTerm(old,newi){
    //   this.debouncedFunction()
    // }
  },
  // created(){
  //   this.debouncedFunction= debounce(this.search,500)
  // },
  methods: {
    ...mapActions("addMenu", ["addToCart", "fetchItem","DeleteMenuItem"]),
    deleteFromMenu(Item,index){
      Item.var=index;
      this.DeleteMenuItem(Item);
      
    },
    search(){
      for(const key in this.preview_list){
        if(this.preview_list[key].MenuName==this.searchTerm){
          this.Menu=this.preview_list.filter((el)=>{return el.MenuName===this.searchTerm})
        }
      }
      // if(this.Menu.length==0){
      //   alert("Please enter valid name")
      // }
      if(this.searchTerm==''){
        this.Menu.pop()
      }
    //  const Find=this.preview_list.find((el)=>el.MenuName===this.searchTerm)
    //  if(Find){
    //   this.Menu.push(Find)
    //   console.log(this.Menu)
    //   console.log(this.searchTerm)
    // }
  },
    //Back from search result
    // Back(){
    //   this.Menu.pop()
    // },
    addCart(Item, index) {
      Item.var = index;
      this.addToCart(Item);
    },
    editMenuItem(Item,index) {
      Item.var=index
      this.fetchItem(Item)
      this.editButton = !this.editButton;
    },
    editMenuClose(){
      this.editButton = !this.editButton;
    },
    showUpload() {
      console.log("Button click");
      this.showChild = !this.showChild;
    },
    closeDialog() {
      this.showChild = !this.showChild;
    },
    upload() {
      this.showChild = !this.showChild;
    },
  },
};
</script>
<style>
/* .v-responsive__sizer {
  width: 180px;
  height: 180px;
}
.v-image__image--cover {
  background-size: contain;
}
.v-responsive__content {
  width: auto !important;
} */
</style>
