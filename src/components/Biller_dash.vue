<template>
  <div>
    <!-- {{ BillMaster }} -->
    <!--------------------------Biller ------------------------------->
    <div v-show="display1">
      <div class="d-flex justify-center">
        <v-card
          class="mx-auto grey lighten-3"
          elevation="7"
          filled
          outlined
          max-width="500"
          color=""
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="blue--text text--darken-4 text-h2 mb-1">
                {{ "Your today sales" }}
              </v-list-item-title>

              <v-list-item-subtitle class="text-h2 ml-3">
                <span>&#8377;</span>
                {{ todayTotal }}{{ "    |" }} {{ percentage }}<span>&#37;</span>
                <v-icon color="green" v-if="show == 'green'"
                  >mdi-arrow-up-bold</v-icon
                >
                <v-icon color="red" v-if="show == 'red'"
                  >mdi-arrow-down-bold</v-icon
                >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </div>
    <!-- Biller Dash -->
    <div>
      <m_dash v-show="display2" />
    </div>

    <!-- apex charts -->

    <v-container :fluid="true">
      <v-layout class="mt-11">
        <v-flex class="d-flex justify-center">
          <v-card class="mt-11 ml-9 grey lighten-3" width="600px" elevation="7">
            <daily_apex v-show="display2" />
          </v-card>
        </v-flex>

        <!-- <v-spacer></v-spacer> -->

        <v-flex class="d-flex justify-center">
          <v-card class="mt-11 mr-9 grey lighten-3" width="600px" elevation="7">
            <month_apex v-show="display2" />
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout class="mt-11">
        <v-flex class="d-flex justify-center">
          <v-card class="mt-11 ml-9 grey lighten-3" width="600px" elevation="7">
            <pie_chart v-show="display2" />
          </v-card>
        </v-flex>

        <!-- <v-spacer></v-spacer>  -->

        <v-flex class="d-flex justify-center">
          <v-card class="mt-11 mr-9 grey lighten-3" width="600px" elevation="7">
            <bar_apex v-show="display2" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import m_dash from "./Manager_dash.vue";
import daily_apex from "./apex.vue/daily_apex.vue";
import month_apex from "./apex.vue/month_apex.vue";
import pie_chart from "./apex.vue/pie_chart.vue";
import bar_apex from "./apex.vue/bar_apex.vue";
export default {
  components: {
    m_dash,
    daily_apex,
    month_apex,
    pie_chart,
    bar_apex,
  },

  data() {
    return {
      // rupeeIcon : "&#8377",
      todayDate: new Date().toJSON().slice(0, 10),
      yesterDate: new Date(new Date().setDate(new Date().getDate() - 1))
        .toJSON()
        .slice(0, 10),
      // getNetPrice : this.$store.state.BillMaster.Netprice,
      BillMaster: this.$store.state.BillMaster,
      LoginHistory: this.$store.state.LoginHistory,
      todayTotal: 0,
      yesterTotal: 0,
      userId: "",
      percentage: 0,
      show: "",
      display1: false,
      display2: false,
      role: this.$store.state.Dashboard.role,
    };
  },
  beforeMount() {
    // alert(this.BillMaster)
    // alert(this.role)
    this.getRole();
    this.getName();
    this.yesterSales();
    this.todaySales();
    this.saleComp();
  },

  methods: {
    todaySales() {
      for (let i = 0; i < this.BillMaster.length; i++) {
        if (this.todayDate == this.BillMaster[i].BillDate) {
          // console.log("----------------------------------");
          // console.log(this.todayDate);
          // console.log(this.BillMaster[i].BillDate);
          // console.log("----------------------------------");
          if (this.userId == this.BillMaster[i].userid) {
            // console.log("----------------------------------");
            // console.log(this.BillMaster[i].userid +  " --- "  + this.userId);
            // console.log(this.BillMaster[i].Netprice);
            // console.log("----------------------------------");
            // console.log("----------------------------------");
            // console.log(this.userId);
            // console.log(this.BillMaster[i].userid);
            // console.log("3");

            this.todayTotal += this.BillMaster[i].Netprice;
            // alert
            this.todayTotal = Math.round(this.todayTotal);
            // console.log("Today");
            // console.log(this.todayTotal);
          }
        }
      }
    },
    getName() {
      for (let i = 0; i < this.LoginHistory.length; i++) {
        // console.log("4");
        if (this.LoginHistory[i].Logout == "Active") {
          // console.log("5");
          this.userId = this.LoginHistory[i].Name;
        }
      }
    },
    yesterSales() {
      for (let i = 0; i < this.BillMaster.length; i++) {
        // console.log("1");
        if (this.yesterDate == this.BillMaster[i].BillDate) {
          // console.log("2");
          if (this.userId == this.BillMaster[i].userid) {
            // console.log(this.userId);
            // console.log("3");
            this.yesterTotal += this.BillMaster[i].Netprice;
            // console.log("Yesterday");
            // console.log(this.yesterTotal);
          }
        }
      }
    },
    saleComp() {
      if (this.todayTotal > this.yesterTotal) {
        this.percentage =
          ((this.todayTotal - this.yesterTotal) / this.todayTotal) * 100;
        this.percentage = Math.round(this.percentage);
        // console.log(this.percentage);
        this.show = "green";
      } else {
        this.percentage =
          ((this.yesterTotal - this.todayTotal) / this.todayTotal) * 100;
        this.percentage = Math.round(this.percentage);
        // console.log(this.percentage);
        this.show = "red";
      }
    },
    getRole() {
      if (this.role == "biller") {
        // alert(this.role)
        this.display1 = true;
      } else if (this.role == "manager") {
        this.display2 = true;
      }
    },
  },
};
</script>
