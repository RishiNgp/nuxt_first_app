<template>
  <v-app>
    <SideBarLeft />
    <v-content>
      <v-system-bar 
        lights-out 
        height="21">
        <v-spacer />
        <v-btn icon>
          <v-icon>fa fa-search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-badge 
            bordered 
            overlap 
            color="red" 
            dot>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon> <v-icon>fa fa-cog</v-icon></v-btn>
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
      </v-system-bar>
      <v-divider/>
      <v-container fluid>
        <v-row
          style="height: 10vh">
          <v-col
            cols="12"
            lg="4"
            sm="4">
            <h1>DASHBOARD</h1>
          </v-col>
          <v-col
            cols="12"
            lg="2"
            sm="2">
            <v-text-field
              filled
              rounded
              dense
              solo
              flat
              background-color="grey lighten-3"/>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row 
          style="height: 40vh">
          <v-col 
            cols="12" 
            sm="8"
            lg="8">
            <v-card 
              class="rounded-xl"
              height="100%">
              <v-app-bar 
                flat 
                color="rgba(0,0,0,0)">
                <h1>Top selling Products</h1>
                <v-spacer />
                <h5
                  style="color: red;"
                >export
                  <v-icon 
                    small 
                    color="red">fa fa-download</v-icon>
                </h5>
              </v-app-bar>
              <v-data-table
                :headers="headers"
                :items="desserts"
                hide-default-footer
              />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            lg="4">
            <v-card
              height="100%"
              class="rounded-xl">
              <v-app-bar
                flat
                color="rgba(0,0,0,0)">
                <p>Total Sales</p>
              </v-app-bar>
              <apexchart 
                :options="chartOptions" 
                :series="series" 
                type="pie" 
                width="380"/>
              <v-app-bar 
                flat 
                color="rgba(0,0,0,0)">
                <v-badge 
                  left
                  color="red" 
                  dot>
                  <p>Direct</p>
                </v-badge>
              </v-app-bar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  layout: "custom",
  components:{
    apexchart: VueApexCharts,
  },
  data() {
    return {
        series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
                // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
        },
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
      {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },

      ],
    };
  },
};
</script>
