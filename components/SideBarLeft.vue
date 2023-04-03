<template>
  <v-card>
    <v-app-bar-nav-icon
      class="d-xl-none d-lg-none"
      variant="text"
      @click.stop="drawer = !drawer" />
    <v-navigation-drawer 
      v-model="drawer" 
      app 
      color="green accent-5" 
      dark>
      <v-list-item class="px-2 py-5">
        <v-list-item-title 
          class="text-capitalize" 
          align="center">
          <v-icon 
            x-large 
            class="pr-2">fas fa-hamburger</v-icon>Burger
        </v-list-item-title>
      </v-list-item>
      <v-list shaped>
        <v-list-item-group 
          v-model="selectedItem" 
          color="grey lighten-5">
          <v-list-item 
            v-for="(item, i) in items" 
            :key="i" 
            :value="item">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <nuxt-link :to="item.route">
                <v-list-item-title 
                  v-text="item.text"
              /></nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: true,
    items: [
      // {icon:"fa fa-home",text:"HOME",route:"/home"},
      { icon: "fas fa-bars", text: "MENU", route: "/menu" },
      { icon: "fa fa-dashboard", text: "DASHBOARD", route: "/dashboard" },

      { icon: "fas fa-shipping-fast", text: "OVERVIEW", route: "/overview" },

      {
        icon: "fas fa-dollar-sign",
        text: "TRANSACTION",
        route: "/transcation",
      },
      { icon: "fas fa-calendar-alt", text: "CALENDAR", route: "/calendar" },
      { icon: "fas fa-cogs", text: "TESTIMONIALS", route: "/testimontails" },
      { icon: "fas fa-question", text: "FAQ", route: "/faq" },
      { icon: "fas fa-sign-out", text: "Logout", route: "/" },
    ],
  }), 
};
</script>
<style>
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #022e21;
}
a:visited {
  text-decoration: none;
  color: inherit;
}
</style>
