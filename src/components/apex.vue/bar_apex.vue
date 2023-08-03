<template>
  <v-container class="mt-9">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <!-- {{ userid_arr }}
    {{ current_month }}
    {{ previous_month }}
    {{ bar_arr }} -->
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
      //   current_month : '',
      //   previous_month : '',
      current_month: new Date(new Date().setMonth(new Date().getMonth())).toJSON().slice(0, 10),
      previous_month: new Date(new Date().setMonth(new Date().getMonth() - 1)).toJSON().slice(0, 10),
      userId: "",
      netSales: 0,
      userid_arr : [],
      bar_str : {},
      bar_arr : [],
      billmaster: this.$store.state.BillMaster,
      login: this.$store.state.Login,
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Current month Biller's performance",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        // yaxis: {
        //   min: 200,
        //   max: 4000,
        // },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  //------------------------------------------------------------------------------------------------------------

  beforeMount() {
    this.getId()
    this.getMonthSales()
    for(let i=0; i<this.bar_arr.length; i++){
      this.chartOptions.xaxis.categories.push(this.bar_arr[i].id)
      this.series[0].data.push(this.bar_arr[i].cash)
    }
    // console.log(this.chartOptions.xaxis.categories);
    // console.log(this.series[0].data);
    // for (let i = 0; i < this.billmaster.length; i++) {
    //   //--------------------------------------
    //   console.log("##################################");
    //   console.log("1");
    //   if (
    //     this.previous_month >= this.billmaster[i].BillDate &&
    //     this.current_month <= this.billmaster[i].BillDate
    //   ) {
    //     console.log("2");
    //     for (let j = 0; j < this.login.length; j++) {
    //       console.log("3");
    //       if (this.login[j].role == "biller") {
    //         console.log("4");
    //         if (this.login[j].userid == this.billmaster[i].userid) {
    //           console.log("5");
    //           this.userId = this.billmaster[i].userid;
    //           this.netSales += this.billmaster[i].Netprice;
    //           console.log("=====================================");
    //           console.log("Userid");
    //           console.log("Netsales");
    //           console.log(this.userId);
    //           console.log(this.netSales);
    //         }
    //       }
    //     }
    //   }
    // }
  },
  methods: {
    getId() {
      for (let j = 0; j < this.login.length; j++) {
        if (this.login[j].role == "biller") {
            this.userid_arr.push(this.login[j].userid)
        }
    }
    // console.log("user Array");
    // console.log(this.userid_arr);
    },//------------------------------------

    getMonthSales(){
        for (let i = 0; i < this.userid_arr.length; i++) {
            // console.log("1");
            for(let j=0; j<this.billmaster.length; j++){
                // console.log("2");
                if ( this.billmaster[j].BillDate >= this.previous_month &&  this.billmaster[j].BillDate <= this.current_month) {
                    // console.log("3");
                    if(this.billmaster[j].userid == this.userid_arr[i]){
                      // console.log("*************************************");
                      // console.log(this.billmaster[j].userid);
                      // console.log(this.userid_arr[i]);
                        // console.log("4");
                        // this.userId = this.billmaster[j].userid;
                        this.netSales += this.billmaster[j].Netprice;
                    }
                }
            }  
            this.bar_arr.push({
              id : this.userid_arr[i],
              cash : this.netSales
            })
            this.netSales =0 ;
            //  this.bar_str = {
            //                 Userid : this.userId,
            //                 Netsales : this.netSales,
            //             }
            //             this.bar_arr.push(this.bar_str)
        }
        // console.log(this.bar_arr);
    },

    // getMonthSales(){
    //     for (let i = 0; i < this.billmaster.length; i++) {
    //         console.log("1");
    //         for(let j=0; j<this.userid_arr.length; j++){
    //             console.log("2");
    //             if ( this.billmaster[i].BillDate >= this.previous_month &&  this.billmaster[i].BillDate <= this.current_month) {
    //                 console.log("3");
    //                 if(this.billmaster[i].userid == this.userid_arr[j]){
    //                     console.log("4");
    //                     this.userId = this.billmaster[i].userid;
    //                     this.netSales += this.billmaster[i].Netprice;
    //                 }
    //             }
    //         }   this.bar_str = {
    //                         Userid : this.userId,
    //                         Netsales : this.netSales,
    //                     }
    //                     this.bar_arr.push(this.bar_str)
    //     }
    //     console.log(this.bar_arr);
    // },

  },
};
</script>
