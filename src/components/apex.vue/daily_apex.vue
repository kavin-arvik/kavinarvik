<template>
  <v-container width="500px">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </v-container>
</template>

<script>
import apexchart from "vue-apexcharts";
export default {
  components: {
    apexchart,
  },

  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          // width: 500,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Daily sales Trend",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
          title: {
            text: "Days",
          },
        },
        yaxis: {
          title: {
            text: "Amount",
          },
        },
      },
      BillMaster: this.$store.state.BillMaster,
      todayDay: "",
      currentdate: "",
      TotalSales: [],
    };
  },
  methods: {
    getIndex() {
      for (let i = 0; i < 7; i++) {
        this.getDate(i);
      }
    },
    getDate(i) {
      let DateObj = new Date();
      DateObj.setDate(DateObj.getDate() - i);

      var Month = DateObj.getMonth() + 1;
      let TempDay = DateObj.getDay();
      console.log(TempDay);

      if (Month <= 9) {
        Month = "0" + Month;
      }

      var Year = DateObj.getFullYear();

      var date = DateObj.toString().slice(8, 10);

      var from = `${Year}-${Month}-${date}`;
      console.log(from);

      // this.getTotalSales(from)

      this.SetData(this.getTotalSales(from), TempDay);
    },
    getTotalSales(from) {
      var UserSales = 0;

      for (let i = 0; i < this.BillMaster.length; i++) {
        if (this.BillMaster[i].BillDate == from) {
          UserSales += this.BillMaster[i].Netprice;
        }
      }
      // console.log(UserSales);
      return UserSales;
    },
    SetData(Amount, day) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      this.TotalSales.push({ Days: days[day], UserSales: Amount });

      console.log(this.TotalSales);
    },
    MapData() {
      for (let i = 0; i < this.TotalSales.length; i++) {
        this.series[0].data.unshift(this.TotalSales[i].UserSales);
        this.chartOptions.xaxis.categories.unshift(this.TotalSales[i].Days);
      }
      console.log(this.series[0].data);
      console.log(this.chartOptions.xaxis.categories);
    },
  },

  beforeMount() {
    this.getIndex();
    this.MapData();
  },
};
</script>
