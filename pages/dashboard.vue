<template>
  <v-app>
    <v-main class="main">
      <SideBarLeft />
      <v-app-bar 
        color="rgba(0,0,0,0)" 
        flat 
        height="55">
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
      </v-app-bar>
      <v-container fluid>
        <v-row>
          <v-col 
            cols="12" 
            xl="4" 
            lg="4" 
            md="12" 
            sm="12">
            <h1>DASHBOARD</h1>
          </v-col>
          <v-col 
            cols="12" 
            xl="2" 
            lg="2" 
            md="4" 
            sm="4">
            <v-select
              :items="[
                '4/01/2023',
                '5/02/2023',
                '6/03/2021',
                '1/09/2016',
                '1/04/2019',
                '2/05/2025',
              ]"
              color="red"
              bg-color="white"
              filled
              rounded
              dense
              flat
              label="Select"
              variant="solo"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row>
          <v-col 
            cols="12" 
            xl="8" 
            md="12" 
            sm="12" 
            lg="8" 
            xs="12">
            <v-card 
              class="rounded-xl" 
              height="100%">
              <v-app-bar 
                flat 
                color="rgba(0,0,0,0)">
                <h3>Top selling Products</h3>
                <v-spacer />
                <h5 style="color: red">
                  export
                  <v-icon 
                    small 
                    color="red">fa fa-download</v-icon>
                </h5>
              </v-app-bar>
              <v-data-table
                :headers="headers"
                :items="desserts"
                class="truncate"
                hide-default-footer
              />
            </v-card>
          </v-col>
          <v-col 
            cols="12" 
            xl="4" 
            sm="12" 
            md="12" 
            lg="4" 
            xs="12">
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
                width="80%"
              />
              <!-- <v-app-bar 
                flat 
                color="rgba(0,0,0,0)">
                <v-badge 
                  left 
                  color="red" 
                  dot>
                  <p>Direct</p>
                </v-badge>
              </v-app-bar> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row>
          <v-col 
            cols="12" 
            xl="6" 
            lg="6" 
            md="6" 
            sm="12" 
            xs="12">
            <v-row>
              <v-col 
                cols="12" 
                xl="6" 
                lg="6" 
                md="6" 
                sm="6" 
                xs="6">
                <v-card 
                  height="100%" 
                  class="rounded-xl">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h3>Customers</h3>
                  </v-app-bar>
                  <p class="number">39400</p>
                  <p 
                    class="number1" 
                    style="color: green">
                    <v-icon 
                      small 
                      color="green">fa-thin fa-arrow-up</v-icon
                    >6.12%
                  </p>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <p>Since Last Month</p>
                  </v-app-bar>
                </v-card>
              </v-col>
              <v-col 
                cols="12" 
                xl="6" 
                lg="6" 
                md="6" 
                sm="6" 
                xs="6">
                <v-card 
                  height="100%" 
                  class="rounded-xl">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h3>Order</h3>
                  </v-app-bar>
                  <p class="number">39400</p>
                  <p 
                    class="number1" 
                    style="color: red">
                    <v-icon 
                      small 
                      color="red">fa-thin fa-arrow-down</v-icon
                    >0.98%
                  </p>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <p>Since Last Month</p>
                  </v-app-bar>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col 
                cols="12" 
                xl="6" 
                md="6" 
                lg="6" 
                sm="6" 
                xs="6">
                <v-card 
                  height="100%" 
                  class="rounded-xl">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h3>Earning</h3>
                  </v-app-bar>
                  <p class="number">39400</p>
                  <p 
                    class="number1" 
                    style="color: red">
                    <v-icon 
                      small 
                      color="red">fa-thin fa-arrow-down</v-icon
                    >8.33%
                  </p>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <p>Since Last Month</p>
                  </v-app-bar>
                </v-card>
              </v-col>
              <v-col 
                cols="12" 
                xl="6" 
                lg="6" 
                md="6" 
                sm="6" 
                xs="6">
                <v-card 
                  height="100%" 
                  class="rounded-xl">
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <h3>Growth</h3>
                  </v-app-bar>
                  <p class="number">39400</p>
                  <p 
                    style="color: green" 
                    class="number1">
                    <v-icon 
                      small 
                      color="green">fa-thin fa-arrow-up</v-icon
                    >6.12%
                  </p>
                  <v-app-bar 
                    flat 
                    color="rgba(0,0,0,0)">
                    <p>Since Last Month</p>
                  </v-app-bar>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col 
            cols="12" 
            xl="6" 
            lg="6" 
            md="6" 
            sm="12" 
            xs="12">
            <v-card 
              height="100%" 
              class="rounded-xl">
              <!-- <v-app-bar 
                flat 
                color="rgba(0,0,0,0)"> -->
              <div class="row">
                <div class="col d-flex">
                  <div class="mr-2">
                    <div class="d-flex">
                      <div class="pdfCalendar">
                        <v-icon
                          style="font-size: 21px !important"
                          @click="modalStartDate = true"
                        >calendar_today</v-icon
                        >
                      </div>
                      &nbsp;
                      <div class="w-100">
                        <v-text-field
                          v-model="startDate"
                          class="csvDate"
                          label="Start Date*"
                          readonly
                          outlined
                          dense
                          @click="modalStartDate = true"
                        />
                      </div>
                    </div>
                    <v-dialog
                      ref="dialog"
                      v-model="modalStartDate"
                      :return-value.sync="startDate"
                      persistent
                      width="290px"
                    >
                      <v-date-picker
                        v-model="startDate"
                        :max="disableDate"
                        scrollable
                      >
                        <v-spacer />
                        <v-btn
                          class="btn btn__secondary"
                          @click="modalStartDate = false"
                        >Cancel</v-btn
                        >
                        <v-btn
                          class="btn btn__primary"
                          @click="
                            validateDate(endDate);
                            $refs.dialog.save(startDate);
                            modalStartDate = false;
                            endDate ? DOMContentLoaded():'';
                          "
                        >OK</v-btn
                        >
                      </v-date-picker>
                    </v-dialog>
                  </div>

                  <div class="ml-2">
                    <div class="d-flex">
                      <div class="pdfCalendar">
                        <v-icon
                          :disabled="!startDate"
                          style="font-size: 21px !important"
                          @click="
                            getEndDate(startDate);
                            modalEndDate = true;
                          "
                        >calendar_today</v-icon
                        >
                      </div>
                      &nbsp;
                      <div class="w-100">
                        <v-text-field
                          v-model="endDate"
                          :disabled="!startDate"
                          class="csvDate"
                          label="End Date*"
                          outlined
                          readonly
                          dense
                          @click="getEndDate(startDate);modalEndDate = true"
                        />
                      </div>
                    </div>
                    <v-dialog
                      ref="dialogEnd"
                      v-model="modalEndDate"
                      :return-value.sync="endDate"
                      persistent
                      width="290px"
                    >
                      <v-date-picker
                        v-model="endDate"
                        :min="startDate"
                        :max="disableEndDate"
                        scrollable
                      >
                        <v-spacer />
                        <v-btn
                          class="btn btn__secondary"
                          @click="modalEndDate = false"
                        >Cancel</v-btn
                        >
                        <v-btn
                          class="btn btn__primary"
                          @click="
                            $refs.dialogEnd.save(endDate);
                            modalEndDate = false;
                            DOMContentLoaded()
                          "
                        >OK</v-btn
                        >
                      </v-date-picker>
                    </v-dialog>
                  </div>
                </div>
              </div>
              <!-- <div class="col-md-6 py-0">
                  <v-btn
                    :disabled="!endDate"
                    class="btn btn__primary btn--lg w-100"
                    @click="
                      pageNumber = 1;
                      searchValue = '';
                      DOMContentLoaded();
                    "
                  >Submit</v-btn
                  >
                </div> -->
              <!-- </v-app-bar> -->
              <!-- <apexchart
                :options="chartOptions1"
                :series="series1"
                
                width="80%"
                height="80%"
              /> -->
              <div 
                id="container" 
                style="width: 85%; height: 80%" />

                <!-- <v-app-bar 
                flat 
                color="rgba(0,0,0,0)">
                <v-row>
                  <v-col>
                    <P>current week</P>
                    <v-col>
                      <h5>39400</h5>
                    </v-col>
                  </v-col>
                  <v-col>
                    <p>previous week</p>
                  </v-col>
                </v-row>
              </v-app-bar> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import Highcharts from "highcharts";
import { chartData } from "../static/chartData";
// import chartData from "../static/chartData";
import moment from "moment";
export default {
  layout: "custom",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      modalStartDate: false,
      startDate: "",
      endDate: "",
      modalEndDate: false,
      disableDate: new Date().toISOString().substr(0, 10),
      disableEndDate:'',
      timestamp:'',
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          // width: 360,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            // breakpoint: 1000,
            // options: {
            //   chart: {
            //     width: 280,
            //     height:280
            //   },
            //   legend: {
            //     position: "bottom",
            //   },
            // },
            breakpoint: 420,
            options: {
              chart: {
                width: 310,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      headers: [
        {
          text: "PRODUCT NAME",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "DATE TIME", value: "date" },
        { text: "PRICE", value: "price" },
        { text: "QUANTITY", value: "quantity" },
        { text: "AMOUNT", value: "amount" },
      ],
      desserts: [
        {
          name: "Canon DSLR Camera",
          date: "03 january 2023",
          price: 12456,
          quantity: 24,
          amount: 1232312,
        },
        {
          name: "Ice cream sandwich",
          date: "03 january 2023",
          price: 23546,
          quantity: 37,
          amount: 1435467,
        },
        {
          name: "Eclair",
          date: "03 january 2023",
          price: 34524,
          quantity: 23,
          amount: 1234356,
        },
        {
          name: "Cupcake",
          date: "03 january 2023",
          price: 123245,
          quantity: 67,
          amount: 1232445,
        },
        {
          name: "Gingerbread",
          date: "03 january 2023",
          price: 1237,
          quantity: 49,
          amount: 2213134,
        },
      ],
    };
  },
  // mounted() {

  // },
  methods: {
    getEndDate(startDate) {
      const getNext30Day = moment(startDate, "YYYY-MM-DD")
        .add(30, "d")
        .format("YYYY-MM-DD");
      if (getNext30Day > this.disableDate) {
        this.disableEndDate = this.disableDate;
      } else {
        this.disableEndDate = getNext30Day;
      }
      return getNext30Day;
    },
    validateDate(endDate) {
      if (
        endDate &&
        (endDate < this.startDate || this.getEndDate(this.startDate) < endDate)
      ) {
        this.endDate = "";
      }
    },
    DOMContentLoaded() {
      const x=chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.humidity,
              ];
      })
      console.log("DATA",x);
      Highcharts.setOptions({
        global: {
          useUTC: false,
        },
      });
      Highcharts.chart("container", {
        chart: {
          type: "spline",
          zoomType: "x",
          resetZoomButton: {
            position: {
              x: -100,
              y: 10,
            },
            theme: {
              zIndex: 6,
            },
          },
        },
        spline: {
          interpolation: {
            type: "monotone",
          },
        },

        title: {
          text: "Gateway Monitor",
        },
        tooltip: {
          formatter: function () {
            return (
              '<span style="color:' +
              this.series.color +
              '">' +
              "\u25CF" +
              "" +
              this.series.name +
              "</span>" +
              "<b>" +
              ": " +
              this.y.toFixed(6) +
              "</b><br/>" +
              Highcharts.dateFormat("%Y-%b-%e %H:%M:%S", new Date(this.x))
            );
          },
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          type: "datetime",
        },
        legend: {
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        },
        plotOptions: {
          series: {
            marker: {
              radius: 3,
            },
            states: {
              inactive: {
                opacity: 1,
              },
            },
          },
        },
        series: [
          {
            name: "temperature",
            data: chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.temperature,
              ];
            }),
            color: "red",
          },
          {
            name: "humidity",
            data: chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.humidity,
              ];
            }),
            color: "yellow",
          },
          {
            name: "pressure",
            data: chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.pressure,
              ];
            }),
            color: "orange",
          },
          {
            name: "lumen",
            data: chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.lumen,
              ];
            }),
            color: "green",
          },
          {
            name: "decibels",
            data: chartData.data.filter((object)=>object.timestamp>=this.startDate&& object.timestamp<this.endDate).map((object) => {
              return [
                moment(object.timestamp, "YYYY-MM-DD HH:mm:ss").unix() * 1000,
                object.decibels,
              ];
            }),
            color: "blue",
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
#app {
  /* background-color: black; */
  width: 100%;
  height: 100%;
  background-color: rgb(233, 232, 232);
  background-size: cover;
  /* background-repeat: inherit; */
  /* overflow-y: scroll; */
}
.number {
  margin-left: 16px;
  font-size: 200%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(85, 79, 79);
}
.number1 {
  margin: 8px;
  color: rgb(85, 79, 79);
}
h1 {
  font-size: 200%;
  color: rgb(85, 79, 79);
}
h3 {
  font-size: 150%;
  color: rgb(85, 79, 79);
}
/* .main{
  display: flex;
} */
.truncate {
  max-width: 100%;
  /* table-layout: fixed; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
