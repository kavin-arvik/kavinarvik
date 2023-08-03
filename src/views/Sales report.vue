<template>
  <v-container class="mt-7 grey lighten-3" rounded>
    <!-- <v-text class=" blue--text text--darken-4 text-h4 ml-3 mb-8">Sales Report</v-text> -->
    <v-list-item-title class="blue--text text--darken-4 text-h4 mt-4 ml-7">Sales Report
    </v-list-item-title>
    <div id="app" class="mt-2">
      <v-layout class="pa-5">
        <v-flex class="px-3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date1"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="date1"
                label="From"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date1)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex class="px-3">
          <v-menu
            ref="modal"
            v-model="modal"
            :close-on-content-click="false"
            :return-value.sync="date2"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="date2"
                label="To"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.modal.save(date2)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex class="px-3 mt-2">
          <v-btn color="#00BFA5" variant="elevated" block @click="search"
            >SEARCH</v-btn
          >
        </v-flex>
      </v-layout>
      <!-- <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date1"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="date1"
                label="From"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date1)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="modal"
            v-model="modal"
            :close-on-content-click="false"
            :return-value.sync="date2"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="date2"
                label="To"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.modal.save(date2)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col>
          <v-btn
            class="ml-11"
            color="#00BFA5"
            variant="elevated"
            block
            @click="search"
            >SEARCH</v-btn
          >
        </v-col>
      </v-row> -->
      <div>
        <!-- {{ date1 }}
        <br />
        {{ date2 }} -->

        <report :sales_bill="sales" />
        <br />
        <snack :obj="Obj" />
        <!-- {{ "*************" }}{{ sales }} -->
      </div>
    </div>
    <!-- {{ 'billmaster' }}<br><br>
    {{ this.$store.state.BillMaster }}
    <br><br>
    {{ 'billdetails' }}<br><br>
    {{ this.$store.state.BillDetails }} -->
  </v-container>
</template>

<script>
import report from "@/components/sales_report.vue";
import snack from "@/components/snackbar.vue";
export default {
  components: {
    report,snack
  },

  data: () => ({
    date1 : new Date().toJSON().slice(0, 10),
    date2 : new Date().toJSON().slice(0, 10),
    // (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    sales: [],
  //SnackBar
    Obj: {
      snackbar: false,
      text: "",
      topvar: false,
      bottomvar: false,
      color: "red",
    },
  }),

  methods: {
    search() {

      // alert("++++++")
      // this.sales.push({
      //   billno: this.$store.state.BillMaster.BillNo,
      //   billdate: this.$store.state.BillMaster.BillDate,
      //   medname: this.$store.state.BillDetails.MedicineName,
      //   qty: this.$store.state.BillDetails.Quantity,
      // });
      // console.log('karthick ');-------------------
      this.sales = [];
      if(this.date1 !="" && this.date2 !=""){
        if(this.date1 <= this.date2){
          console.log("1-if");
        for (let i = 0; i < this.$store.state.BillMaster.length; i++) {
        // console.log("1");----------------
        for (let j = 0; j < this.$store.state.BillDetails.length; j++) {
          // console.log('k2');--------------
          if (this.$store.state.BillMaster[i].BillDate >= this.date1 && this.$store.state.BillMaster[i].BillDate <= this.date2 ) {
               // console.log("2");------------------------
           if (this.$store.state.BillMaster[i].BillNo == this.$store.state.BillDetails[j].BillNo) {          
              // console.log("3");--------------------------
              this.sales.push({
                billno: this.$store.state.BillMaster[i].BillNo,
                billdate: this.$store.state.BillMaster[i].BillDate,
                medname: this.$store.state.BillDetails[j].MedicineName,
                qty: this.$store.state.BillDetails[j].Quantity,
                amt: this.$store.state.BillDetails[j].Amount,
              });
            }
          }
        }
      }
        }else{
          this.Obj = {
            snackbar: true,
            text: "Enter the correct data",
            topvar: false,
            bottomvar: true,
            color: "error",
          };
        }
        //-------------------------
      }else if(this.date1 =="" || this.date2 ==""){
        console.log("2-else");
        // alert("incomplete fields");
        this.Obj = {
            snackbar: true,
            text: "Enter the correct data",
            topvar: false,
            bottomvar: true,
            color: "error",
          };
      }
      
    },
  },
};
</script>
