<template>
  <div id="chart">
    <div style="margin-left:190px; padding-top: 15px;" >
          <span style="font-weight: bold">Today Biller's performance</span>         
    </div>

    <apexchart
      type="donut"
      width="530"
      :options="options"
      :series="options.series"
    ></apexchart>
    <!-- {{ "kavin" }} -->
    <!-- {{ todaySale }} -->
    <!-- {{ todaySaleArray }} -->
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
export default {
  components: {
    apexchart,
  },

  data() {
    return {
      currentDate: new Date(new Date().setMonth(new Date().getMonth()))
        .toJSON()
        .slice(0, 10),
      userArray: [],
      billmaster: this.$store.state.BillMaster,
      login: this.$store.state.Login,
      todaySale: 0,
      todaySaleArray: [],
      options: {
        labels: [],
        series: [],
      },
      series: [44, 55, 41, 17, 15],
      // series : [],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title:{
          text: "Today Biller's performance",
          // align: "center",
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //       legend: {
        //         position: "bottom",
        //       },
        //     },
        //   },
        // ],
      },
    };
  },
  beforeMount() {
    this.getUser();
    this.mapping();
    for (let i = 0; i < this.todaySaleArray.length; i++) {
      // console.log("5");
      this.options.series.push(this.todaySaleArray[i].cash);
      this.options.labels.push(this.todaySaleArray[i].id);
    }
  },
  methods: {
    getUser() {
      for (let i = 0; i < this.login.length; i++) {
        // console.log("1");
        if (this.login[i].role == "biller") {
          this.userArray.push(this.login[i].userid);
          // console.log("2");
        }
      }
    },
    mapping() {
      for (let i = 0; i < this.userArray.length; i++) {
        // console.log("3");
        this.todaySale = 0;
        for (let j = 0; j < this.billmaster.length; j++) {
          if (
            this.userArray[i] == this.billmaster[j].userid &&
            this.billmaster[j].BillDate == this.currentDate
          ) {
            this.todaySale += this.billmaster[j].Netprice;
            // console.log("4");
          }
        }
        this.todaySaleArray.push({
          id: this.userArray[i],
          cash: this.todaySale,
        });
      }
    },
  },
};
</script>
