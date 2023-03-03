<template>
  <v-navigation-drawer 
    app 
    color="grey lighten-3" 
    right 
    width="270">
    <v-toolbar 
      color="grey lighten-3" 
      flat>
      <v-spacer />
      <v-btn icon>
        <v-badge 
          bordered 
          overlap 
          color="red" 
          dot>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-badge 
        bordered 
        bottom 
        color="green" 
        dot 
        offset-x="10" 
        offset-y="10">
        <v-avatar 
          size="40" 
          rounded>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
        </v-avatar>
      </v-badge>
      <v-btn icon>
        <v-icon>fas fa-ellipsis-v</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar 
      class="pl-0 mt-5" 
      flat 
      color="grey lighten-3">
      <h3>My Order</h3>
      <v-spacer />
      <h6 class="green--text">Edit</h6>
    </v-toolbar>
    <v-app-bar 
      flat 
      color="rgba(0,0,0,0)" 
      class="mt-n5">
      <v-btn 
        fab 
        x-small 
        color="green lighten-4" 
        elevation="0">
        <v-icon color="green">fas fa-clock</v-icon>
      </v-btn>
      <h5 class="ml-2 grey--text text--darken-2">14.30 AM</h5>
    </v-app-bar>
    <v-app-bar 
      flat 
      color="rgba(0,0,0,0)" 
      class="mt-n5">
      <v-btn 
        fab 
        x-small 
        color="green lighten-4" 
        elevation="0">
        <v-icon color="green">fas fa-map-marker-alt</v-icon>
      </v-btn>
      <h5 class="ml-2 grey--text text--darken-2">69 7th Ave S, New York</h5>
    </v-app-bar>
    <v-app-bar 
      flat 
      color="rgba(0,0,0,0)" 
      class="mt-n5">
      <v-btn 
        fab 
        x-small 
        color="green lighten-4" 
        elevation="0">
        <v-icon color="green">fas fa-comment-dots</v-icon>
      </v-btn>
      <h5 class="ml-2 grey--text text--darken-2">
        Dial me for order specification
      </h5>
    </v-app-bar>
    <v-divider />
    <span v-if="Preview_image[0] == null">
      <v-container>
        <v-row>
          <v-col 
            cols="12" 
            sm="3">
            <!-- :src="require('~/static/0.png')" -->
            <v-img
              :src="require('~/static/0.png')"
              max-height="50"
              max-width="50"
              contain
              class="mt-1 mr-1"
            />
          </v-col>
          <v-col 
            cols="12" 
            sm="3">
            <h6 class="ml-n6 grey--text text--darken-2">
              Bean soup <br >
              <span class="grey--text text--lighten-1">350g</span>
            </h6>
          </v-col>
          <v-col 
            cols="12" 
            sm="6">
            <v-chip
              class="ml-n5"
              color="green"
              outlined
              text-color="black"
              small
            >
              <v-icon 
                left 
                x-small> fas fa-plus </v-icon>
              <v-divider 
                vertical 
                inset 
                class="mr-1" />
              1
              <v-divider 
                vertical 
                inset 
                class="ml-1" />
              <v-icon 
                right 
                x-small> fas fa-minus </v-icon>
            </v-chip>
            <strong class="ml-1 mr-1">$4.20</strong>
            <v-icon x-small> fas fa-times </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col 
            cols="12" 
            sm="3">
            <v-img
              :src="require('~/static/3.png')"
              max-height="50"
              max-width="50"
              contain
              class="mt-1 mr-1"
            />
          </v-col>
          <v-col 
            cols="12" 
            sm="3">
            <h6 class="ml-n6 grey--text text--darken-2">
              Noodle salad <br >
              <span class="grey--text text--lighten-1">300g</span>
            </h6>
          </v-col>
          <v-col 
            cols="12" 
            sm="6">
            <v-chip
              class="ml-n5"
              color="green"
              outlined
              text-color="black"
              small
            >
              <v-icon 
                left 
                x-small> fas fa-plus </v-icon>
              <v-divider 
                vertical 
                inset 
                class="mr-1" />
              1
              <v-divider 
                vertical 
                inset 
                class="ml-1" />
              <v-icon 
                right 
                x-small> fas fa-minus </v-icon>
            </v-chip>
            <strong class="ml-1 mr-1">$6.30</strong>
            <v-icon x-small> fas fa-times </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col 
            cols="12" 
            sm="3">
            <v-img
              :src="require('~/static/6.png')"
              max-height="50"
              max-width="50"
              contain
              class="mt-1 mr-1"
            />
          </v-col>
          <v-col 
            cols="12" 
            sm="3">
            <h6 class="ml-n6 grey--text text--darken-2">
              Roast potato<br >
              <span class="grey--text text--lighten-1">300g</span>
            </h6>
          </v-col>
          <v-col 
            cols="12" 
            sm="6">
            <v-chip
              class="ml-n5"
              color="green"
              outlined
              text-color="black"
              small
            >
              <v-icon 
                left 
                x-small> fas fa-plus </v-icon>
              <v-divider 
                vertical 
                inset 
                class="mr-1" />
              1
              <v-divider 
                vertical 
                inset 
                class="ml-1" />
              <v-icon 
                right 
                x-small> fas fa-minus </v-icon>
            </v-chip>
            <strong class="ml-1 mr-1">$4.99</strong>
            <v-icon x-small> fas fa-times </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </span>
    <span v-else>
      <v-container>
        <v-row 
          v-for="(item,ind) in Preview_image" 
          :key="ind">
          <v-col 
            cols="12" 
            sm="3">
            <v-img
              :src="item.cartImage"
              max-height="50"
              max-width="50"
              contain
              class="mt-1 mr-1"
            />
          </v-col>
          <v-col 
            cols="12" 
            sm="3">
            <h6 class="ml-n6 grey--text text--darken-2">
              {{ item.cartName }} <br >
              <span class="grey--text text--lighten-1">350g</span>
            </h6>
          </v-col>
          <v-col 
            cols="12" 
            sm="6">
            <v-chip
              class="ml-n5"
              color="green"
              outlined
              text-color="black"
              small
            >
              <v-icon 
                left 
                x-small 
                @click="addQuantity(item,ind)"> fas fa-plus </v-icon>
              <v-divider 
                vertical 
                inset 
                class="mr-1" />
              {{ item.cartQuantity }}
              <v-divider 
                vertical 
                inset 
                class="ml-1" />
              <v-icon 
                right 
                x-small 
                @click="reduceQuantity(item,ind)"> fas fa-minus </v-icon>
            </v-chip>
            <strong class="ml-1 mr-1">₹{{ item.cartPrice }} </strong>
            <v-icon 
              x-small 
              @click="removeFromCart(item,ind)"> fas fa-times </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </span>
    <div class="text-center">
      <v-btn 
        class="px-12" 
        outlined 
        color="green"> Drag & Drop </v-btn>
    </div>
    <v-toolbar 
      class="pl-0" 
      flat 
      color="grey lighten-3">
      <h3>Total</h3>
      <v-spacer />
      <h3>{{ netTotal }}</h3>
    </v-toolbar>
    <div class="text-center">
      <v-btn 
        class="px-15" 
        rounded 
        color="green" 
        dark> Checkout </v-btn>
    </div>
    <div class="text-center">
      <v-card 
        elevation="2" 
        class="mt-2 mx-2 pa-3">
        <v-container>
          <v-row>
            <v-col 
              cols="12" 
              sm="2">
              <v-icon 
                color="blue" 
                class="ml-n2">fab fa-cc-visa</v-icon>
            </v-col>
            <v-col 
              cols="12" 
              sm="2"
            ><span class="caption text-9xl ml-n3">****</span></v-col
            >
            <v-col 
              cols="12" 
              sm="2"
            ><span class="caption text-9xl ml-n5">****</span></v-col
            >
            <v-col 
              cols="12" 
              sm="2"
            ><span class="caption text-9xl ml-n5">****</span></v-col
            >
            <v-col 
              cols="12" 
              sm="2"
            ><span class="caption text-9xl ml-n5">6132</span></v-col
            >
            <v-col 
              cols="12" 
              sm="2"> <v-icon small>fas fa-edit</v-icon></v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      add: 0,
      total:0
    };
  },
  computed: {
    Preview_image() {
      return this.$store.getters["addMenu/CartList"];
    },
    netTotal(){
      return this.Total()
    }
  

  },

  methods: {
    ...mapActions("addMenu", ["addItemQuantity" ,"reduceItemQuantity","removeItem"]),
    addQuantity(Item,index) {
      Item.var=index
     this.addItemQuantity(Item)
    },
    reduceQuantity(Item,index) {
     Item.var=index
     this.reduceItemQuantity(Item)
    },
  
    removeFromCart(Item,index){
      Item.var=index
      this.removeItem(Item)
      
      //  this.Preview_image.splice(this.Preview_image.findIndex(a=>a.var===this.Preview_image[index]),1)
    },
    Total(){
      this.total=0
      for(const key in this.Preview_image){
        this.total += parseInt(this.Preview_image[key].cartPrice)
      }
      return this.total
    },
  },
};
</script>

<style scoped></style>
