<template>
  <div>
    <v-container class="mt-5">
      <!-- {{ stock_Copy }} -->
      <!-- {{ arr }} -->
      <v-expansion-panels class="d-flex">
        <v-expansion-panel>
          <v-expansion-panel-header
            class="white--text text--darken-4 primary text-h4"
            >Item</v-expansion-panel-header
          >
          <v-expansion-panel-content class="grey lighten-3">
            <!-- <v-row  class="pa-6 d-flex justify-center"> -->
            <v-layout class="mt-7">
              <!-- {{ $store.state.Stock }} -->
              <!-- {{ "add_arr" }} -->
              <!-- {{ arr }} -->
              <v-flex class="mx-5">
                <v-autocomplete
                  outlined
                  label="Medicine Name"
                  v-model="medName"
                  :items="items"
                  @click="update_med"
                ></v-autocomplete>
              </v-flex>

              <v-flex>
                <v-text-field
                  type="Number"
                  label="Quantity"
                  v-model.number="qty"
                  placeholder="Quantity"
                  outlined
                ></v-text-field>
              </v-flex>

              <v-flex class="mx-5 mt-2">
                <v-btn color="#00BFA5" variant="elevated" @click="add_in_bill"
                  >ADD</v-btn
                >
              </v-flex>
            </v-layout>
            <!-- </v-row> -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <v-container>
      <div>
        <v-card class="pa-10 grey lighten-3">
          <!-- <v-row class="mt-2"> -->
          <v-layout class="mt-2">
            <v-flex>
              <!-- //Preview Button -->
              <preview
                :get_arr="arr"
                :total="this.sum"
                :Gst="gst"
                :N_pay="net_pay"
              />
            </v-flex>

            <v-flex>
              <v-btn color="#00BFA5" variant="elevated" @click="save"
                >SAVE</v-btn
              >
            </v-flex>

            <v-flex class="mt-2">
              <p>{{ "BILL NO : " + this.count }}</p>
            </v-flex>

            <v-flex class="mt-2">
              <p>{{ "DATE: " + this.dt }}</p>
            </v-flex>

            <v-flex class="mt-2">
              <p>{{ "TOTAL: " + this.sum }}</p>
            </v-flex>

            <v-flex class="mt-2">
              <p>{{ "GST: " + this.gst }}</p>
            </v-flex>

            <v-flex class="mt-2">
              <p>{{ "Net Payable: Rs " + this.net_pay }}</p>
            </v-flex>
          </v-layout>
          <!-- </v-row> -->
        </v-card>
      </div>
    </v-container>
    <!-- {{ "BillDet" }}
    <br />{{ this.$store.state.BillDetails }}
    <br />
    {{ "Bmaster" }}
    <br />{{ this.$store.state.BillMaster }} -->
    <div>
      <bill :get_arr="arr" />
      <snack :obj="Obj" />
      <!-- <bill :get_medName="medName" :get_brand="brand" :get_qty="qty"/> -->
    </div>
  </div>
</template>

<script>
import bill from "@/components/bill entry.vue";
import preview from "@/components/bill preview.vue";
import snack from "@/components/snackbar.vue";
export default {
  components: {
    bill,
    preview,
    snack,
  },

  data() {
    return {
      items: [],
      medName: "",
      qty: 0,
      brand: "",
      amount: 0,
      UPrice: 0,
      addDetails: {},
      Lstock: this.$store.state.Stock,
      stock_Copy: [],

      arr: [],
      //Snackbar
      Obj: {
        snackbar: false,
        text: "",
        topvar: false,
        bottomvar: false,
        color: "red",
      },
      // billno:0,
      count: this.$store.state.BillMaster.length + 1,
      dt: "",
      gst: 0,
      sum: 0,
      net_pay: 0,

      Bill_Master: {},
      Bill_Details: {},
    };
  },
  // beforeMount() {
    // for (let i = 0; i < this.$store.state.Stock.length; i++) {
    //   this.stock_Copy.push({
    //     MdName: this.this.$store.state.Stock[i].MedicineName,
    //     Qtyy: this.this.$store.state.Stock[i].Quantity,
    //     Price: this.this.$store.state.Stock[i].UnitPrice,
    //   });
    //   console.log(this.stock_Copy);
    //   // this.stock_Copy.push(this.$store.state.Stock[i]);
    // }
  // },

  //-----------------Hook--------------------
  mounted() {
    // let d = new Date();
    // let date = d.getDate();
    // let mon = d.getMonth();
    // let yr = d.getFullYear();
    // this.dt = date + "-" + mon + "-" + yr;
    this.dt = new Date().toJSON().slice(0, 10);
    
    for (let i = 0; i < this.Lstock.length; i++) {
      this.stock_Copy.push({
        MdName: this.Lstock[i].MedicineName,
        Qtyy: this.Lstock[i].Quantity,
        Price: this.Lstock[i].UnitPrice,
      });
      console.log(this.stock_Copy);
      // this.stock_Copy.push(this.$store.state.Stock[i]);
    }
  },
  //-----------------Hook--------------------
  updated() {
    // console.log("Ready");
    for (let i = 0; i < this.$store.state.Stock.length; i++) {
      if (this.$store.state.Stock[i].MedicineName == this.medName) {
        for (let j = 0; j < this.$store.state.MedicineMaster.length; j++) {
          // console.log("enter");
          if (
            this.medName == this.$store.state.MedicineMaster[j].Medicinename
          ) {
            this.brand = this.$store.state.MedicineMaster[j].Brand;
            break;
          }
        }

        // this.brand = this.$store.state.MedicineMaster[j].Brand;
        this.UPrice = this.$store.state.Stock[i].UnitPrice;
        this.amount = this.$store.state.Stock[i].UnitPrice * this.qty;
        break;
      }
    }
    // console.log("Ready1");

    // console.log(this.UPrice);
    // console.log(this.brand);
    // console.log(this.amount);

    // console.log("**********");
    // console.log(this.gst);
    // console.log(this.sum);
    // this.gst = this.sum * this.gst;
    // console.log(this.gst);
    // console.log(this.sum);
  },

  methods: {
    update_med() {
      for (let i = 0; i < this.$store.state.Stock.length; i++) {
        // this.items = [];
        this.items.push(this.$store.state.Stock[i].MedicineName);
      }
    },

    add_in_bill() {
      let temp = true;
      ///validation has to be entered-------------------------------------------------------------
      if (this.medName != "" && this.qty != "" && this.qty > 0) {
        for (let i = 0; i < this.$store.state.Stock.length; i++) {
          // console.log(this.$store.state.Stock[i].Quantity);
          if (
            this.medName == this.$store.state.Stock[i].MedicineName &&
            this.qty <= this.$store.state.Stock[i].Quantity
          ) {
            this.stock_Copy[i].Qtyy -= this.qty;
            if (this.stock_Copy[i].Qtyy >= 0) {
              temp = false;
            }
                // this.medName = ""
                // this.qty = ""
          }
          // this.sum = 0;
          // for (let i = 0; i < this.arr.length; i++) {
          //   this.sum = this.sum + this.amount;
          //
          // this.medName = ""
          // this.qty = ""
        }
        if (temp == false) {
          // this.medName = ""
          // this.qty = ""
          this.arr.push({
            med_name: this.medName,
            med_brand: this.brand,
            med_qty: this.qty,
            med_amt: this.amount,
          });
          // this.medName = "";
          // this.qty = 0;
           //  this.medName = ""
          // this.qty = ""
          // let stockqty =0 ;
          // for(let j=0; )
          // this.$store.state.Stock[j].MedicineName
          // let stockCheck = 0;
          // for(let i=0; this.arr.length; i++){
          //   if(this.medName == this.arr[i].med_name){
          //     stockCheck += this.arr[i].med_qty;
          //   }
          // }

          this.sum += this.amount;
          this.cal_gst();
          this.cal_net();
          // this.medName = ""
          // this.qty = ""
          // console.log(this.arr);-------------------------
        } else {
          // alert("enter the proper quantity");
          this.Obj = {
            snackbar: true,
            text: "Enter the proper quantity",
            topvar: false,
            bottomvar: true,
            color: "error",
          };
        }
        //-------------------------
        // this.medName = ""
        // this.qty = ""
        //------------------------
      } else {
        // alert("enter the proper data");
        this.Obj = {
          snackbar: true,
          text: "Enter the proper data",
          topvar: false,
          bottomvar: true,
          color: "error",
        };
      }
      // this.medName = ""
      // this.qty = ""
      // this.medName = "";
      // this.qty = 0;
    },

    cal_gst() {
      this.gst = this.sum * 0.18;
    },

    cal_net() {
      this.net_pay = this.sum + this.gst;
    },

    save() {
      if (this.arr.length == 0) {
        this.Obj = {
          snackbar: true,
          text: "Enter the proper data",
          topvar: false,
          bottomvar: true,
          color: "error",
        };
      } else {
        this.billDetails();
        this.billMaster();
      }

      //new content
      this.arr = [];
      this.medName = "";
      this.qty = 0;
      this.sum = 0;
      this.gst = 0;
      this.net_pay = 0;

      // console.log("1");

      // console.log("2");
      // this.$store.commit("Set_Bill_Master", this.Bill_Master);
      // console.log("3");

      // this.$store.state.BillMaster.push({Bill_no:this.count, Bill_date:this.dt, Bill_amount:this.amount, Bill_Gst:this.gst, Net_Price:this.net_pay, User_id:this.$store.state.LoginHistory.Name})
      // this.$store.state.BillDetails.push({Bill_no:this.count, Med_Name:this.medName, Quantity:this.qty, UnitPrice:this.UnitPrice, Amount:this.amount})
      // console.log("##"+this.net_pay);

      // for(let i=0;i<this.arr.length;i++){
      //     this.Bill_Details.BillNo = this.count;
      //     this.Bill_Details.MedicineName = this.medName;
      //     this.Bill_Details.Quantity = this.qty;
      //     this.Bill_Details.UnitPrice = this.UPrice;
      //     this.Bill_Details.Amount = this.amount;

      //     this.$store.state.BillDetails.push(this.Bill_Details);
      //     this.$store.commit("Set_Bill_Details",this.Bill_Details);
      // }

      //----BILL DETAILS ARR
      //    this.Bill_Details.BillNo = this.count;
      //    this.Bill_Details.MedicineName = this.medName;
      //    this.Bill_Details.Quantity = this.qty;
      //    this.Bill_Details.UnitPrice = this.UPrice;
      //    this.Bill_Details.Amount = this.amount;

      //    this.$store.state.BillDetails.push(this.Bill_Details);

      // ---BILL MASTER ARR

      //    this.$store.commit("Set_Bill_Details", this.Bill_Details);
      // console.log(this.net_pay);
      // this.Bill_Master={
      //     BillNo : this.count,
      //     BillDate : this.dt,
      //     BillAmount : this.amount,
      //     BillGST : this.gst,
      //     Netprice : this.net_pay,
      //     userid : this.$store.state.LoginHistory.Name,
      // }
      // this.this.$store.state.BillMaster.push(this.Bill_Master);
      // this.$store.commit();
    },

    billMaster() {
      // alert()
      this.Bill_Master = {
        BillNo: this.count,
        BillDate: this.dt,
        BillAmount: this.sum,
        BillGST: this.gst,
        Netprice: this.net_pay,
        userid: this.$store.state.Dashboard.userid,
      };
      // this.Bill_Master.BillNo = this.count;
      // this.Bill_Master.BillDate = this.dt;
      // this.Bill_Master.BillAmount = this.amount;
      // this.Bill_Master.BillGST = this.gst;
      // this.Bill_Master.Netprice = this.net_pay;
      // this.Bill_Master.userid = this.$store.state.LoginHistory.Name;

      this.$store.state.BillMaster.push(this.Bill_Master);

      // console.log("****" + this.count);------------
      this.count = this.count + 1;
      // console.log(this.count);---------------
    },

    billDetails() {
      for (let i = 0; i < this.arr.length; i++) {
        //this.arr.push({med_name:this.medName, med_brand:this.brand, med_qty:this.qty, med_amt:this.amount})
        this.Bill_Details = {
          BillNo: this.count,
          MedicineName: this.arr[i].med_name,
          Quantity: this.arr[i].med_qty,
          UnitPrice: this.UPrice,
          Amount: this.arr[i].med_amt,
        };
        //one loop campare the medi name then we get the unoit this.Bill_Details = {UnitPrice: this.what}
        for (let j = 0; j < this.$store.state.Stock.length; j++) {
          if (this.arr[i].med_name == this.$store.state.Stock[j].MedicineName) {
            // alert(this.$store.state.Stock[j].MedicineName);

            this.Bill_Details.UnitPrice = this.$store.state.Stock[j].UnitPrice;
            // alert(this.$store.state.Stock[j].Quantity)
            // alert(this.qty)
            //================================
            this.$store.state.Stock[j].Quantity -= this.qty;
            // this.$store.state.Stock[j].Quantity -= this.arr[i].med_qty;
            // if (this.$store.state.Stock[j].Quantity > 0) {
            //   this.$store.state.Stock[j].Quantity -= this.qty;
            //   // break;
            // } else {
            //   this.Obj = {
            //     snackbar: true,
            //     text: "Enter the proper quantity",
            //     topvar: false,
            //     bottomvar: true,
            //     color: "error",
            //   };
            // }
            //================================
          }
        }
        //console.log({BillNo:this.count, MedicineName:this.medName, Quantity:this.qty, UnitPrice:this.UPrice, Amount:this.amount});
        this.$store.state.BillDetails.push(this.Bill_Details);
      }
    },
  },
};
</script>
