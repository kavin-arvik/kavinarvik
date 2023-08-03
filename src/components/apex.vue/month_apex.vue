<template>
  <v-container>
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
          name: "dfdf",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          // dropShadow: {
          //     enabled: false,
          //     color: '#000',
          //     top: 18,
          //     left: 7,
          //     blur: 10,
          //     opacity: 0.2
          // },
          toolbar: {
            show: false,
          },  
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Monthly sales trend",
          align: "center",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
          title: {
            text: "Month",
            // size: 10,
          },
        },
        yaxis: {
          title: {
            text: "Amount",
          },
          // legend: {
          //     position: 'top',
          //     horizontalAlign: 'right',
          //     floating: false,
          //     offsetY: -25,
          //     offsetX: -5
          // }
        },
      },
      BillMaster: this.$store.state.BillMaster,
      currentMonlth: "",
      MonthlySales: [],
    };
  },
  beforeMount() {
    this.GetIndex();
    this.PushArray();
  },
  methods: {
    GetIndex() {
      for (let i = 0; i < 12; i++) {
        this.GetMonth1(i);
      }
    },
    GetMonth1(index) {

      // console.log("todAY MONTH  ", new Date(new Date().setMonth(new Date().getMonth()-0)).toString().slice(4,7))
      // console.log("-----------------------------");
      // console.log(index);
      // console.log("-----------------------------");
      let DateObj = new Date();
      DateObj.setMonth(DateObj.getMonth() - index);
      // console.log(DateObj);
      // console.log("-----------------------------");
      // console.log(DateObj)
      // console.log("-----------------------------");
      var Month = DateObj.getMonth() + 1;
      // console.log("-----------------------------");
      // console.log(Month);
      // console.log("-----------------------------");
      var TempMonth = DateObj.getMonth();
      // console.log("Month" + Month);

      var Year = DateObj.getFullYear();
      // console.log("Year  : " + Year);

      let firstDay = new Date(Year, Month, 1).toString().slice(8, 10);
      let lastDay = new Date(Year, Month, 0).toString().slice(8, 10);

      if (Month <= 9) {
        Month = "0" + Month;
      }
      //console.log(`${firstDay}-${Month}-${Year}`);
      var from = `${Year}-${Month}-${firstDay}`;
      // console.log(from);
      var To = `${Year}-${Month}-${lastDay}`;
      // console.log("==============================");
      // console.log(To)
      // console.log("==============================");
      // console.log(from,typeof(from));
      // console.log(To,typeof(To));

      this.SetData(this.getTotalSales(from, To), TempMonth);
      // console.log(this.SetData(this.getTotalSales(from, To), TempMonth));
    },

    getTotalSales(from, To) {
      // console.log("-----------------");
      // console.log(from);
      // console.log(To);
      // console.log("-----------------");

      var UserSales = 0;

      for (let i = 0; i < this.BillMaster.length; i++) {
        if (
          this.BillMaster[i].BillDate >= from &&
          this.BillMaster[i].BillDate <= To
        ) {
          // console.log(this.BillMaster[i].BillDate);
          UserSales += this.BillMaster[i].Netprice;
        }
      }
      // console.log("Usersales "+UserSales);
      return UserSales;
    },
    SetData(Amount, month) {
      // var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mL = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      this.MonthlySales.push({ Month: mL[month], UserSales: Amount });
      // console.log(this.MonthlySales);
    },
    PushArray() {
      for (var j = 0; j < this.MonthlySales.length; j++) {
        this.series[0].data.unshift(this.MonthlySales[j].UserSales);
        this.chartOptions.xaxis.categories.unshift(this.MonthlySales[j].Month);
      }
      // console.log(this.series[0].data);
      // console.log(this.chartOptions.xaxis.categories);
    },
  },
};
</script>
