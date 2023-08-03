<template>
  <!-- view -->
  <div id="refill">
    <v-container>
      <v-card class="mt-8 pa-8 grey lighten-3">
          <v-layout>           
            <!-- <p class="mb-8">Refill Stock</p> -->
            <v-list-item-title class="blue--text text--darken-4 text-h4 mb-6">Refill Stock
            </v-list-item-title>
            <!-- <h3>Refill Stock</h3> -->
            <!-- <v-text class=" blue--text text--darken-4 text-h4 ml-3 mb-8">Refill Stock</v-text> -->
            <v-spacer></v-spacer>
            
            
            <v-flex class="mt-7 mb-8">
              <!-- <v-btn color="success" variant="elevated" @click="add">+ ADD</v-btn> -->
              <addstock color="00BFA5" class="ml-11" v-show="show" @signal="receive" />
            </v-flex>
            
          </v-layout>
        <!-- {{ qty + typeof qty }} -->
        <v-row>
          <v-col cols="12" md="3">
            <v-autocomplete
              outlined
              label="Medicine Name"
              v-model="medName"
              @change="drop"
              :items="items"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Brand"
              v-model="brand"
              disabled
              placeholder="Brand"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              type="Number"
              label="Qty"
              v-model.number="qty"
              placeholder="Quantity"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              type="Number"
              label="Unit Price"
              v-model.number="price"
              placeholder="unit price"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn color="#00BFA5" variant="elevated" block @click="upload"
              >UPDATE</v-btn
            >
          </v-col>
        </v-row>
        <snack :obj="Obj" />
        <!-- {{ items }}
        <br />{{ "Stock array----" }} {{ this.$store.state.Stock }}<br /><br />
        <br />{{ "medicine master----" }}
        {{ this.$store.state.MedicineMaster }} -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import addstock from "@/components/Addstock.vue";
import snack from "@/components/snackbar.vue";
export default {
  components: {
    addstock,
    snack,
  },

  data() {
    return {
      items: [],
      medName: "",
      brand: "",
      qty: 0,
      price: 0,
      show: true,
      // update:[],
      up_qty: 0,
      up_price: 0,
      //snackbar
      Obj: {
        snackbar: false,
        text: "",
        topvar: false,
        bottomvar: false,
        color: "red",
      },
    };
  },

  methods: {
    add() {
      this.show = true;
    },

    update_med() {
      for (let i = 0; i < this.$store.state.MedicineMaster.length; i++) {
        // this.items = [];
        this.items.push(this.$store.state.MedicineMaster[i].Medicinename);
      }
    },

    drop() {
      // this.update_med();
      this.get_brand();
    },

    upload() {
      let value = true;
      if (
        this.medName != "" &&
        this.brand != "" &&
        this.qty != "" &&
        this.price != "" &&
        this.qty > 0 &&
        this.price > 0
      ) {
        for (let i = 0; i < this.$store.state.Stock.length; i++) {
          //     console.log("hiiiiiii");

          if (this.$store.state.Stock[i].MedicineName == this.medName) {
            // console.log("byre");
            this.$store.state.Stock[i].Quantity += Math.trunc(this.qty);
            this.$store.state.Stock[i].UnitPrice = Math.trunc(this.price);
            // console.log(this.$store.state.Stock);-----------------------------
            value = false;
          }
        }

        if (value == false) {
          // alert(" successfully");
          this.Obj = {
            snackbar: true,
            text: "Stocks updated",
            topvar: false,
            bottomvar: true,
            color: "success",
          };

          this.medName = "";
          this.brand = "";
          this.qty = "";
          this.price = "";
        
        } else {
          this.$store.state.Stock.push({
            MedicineName: this.medName,
            Quantity: this.qty,
            UnitPrice: this.price,
          });
        }
      } else {
        // alert("Enter the valid data");
        this.Obj = {
          snackbar: true,
          text: "Enter the valid data",
          topvar: false,
          bottomvar: true,
          color: "error",
        };
      }

      //     this.up_qty = this.$store.state.Stock.Quantity;
      //     this.up_price = this.$store.state.Stock.UnitPrice;
      //     this.update.MedicineName = this.medName;
      //     this.update.Quantity = this.up_qty;
      //     this.update.UnitPrice = this.up_price;
      //     this.$store.commit('updateStock', this.update)

      // this.update.MedicineName = this.medName;
      // this.update.Quantity = this.qty;
      // this.update.UnitPrice = this.price;
      // this.$store.commit('updateStock', this.update);
      // console.log(this.$store.state.Stock);
    },

    receive(a) {
      this.items.push(a.Medicinename);
    },

    get_brand() {
      for (let i = 0; i < this.$store.state.MedicineMaster.length; i++) {
        if (this.$store.state.MedicineMaster[i].Medicinename == this.medName) {
          this.brand = this.$store.state.MedicineMaster[i].Brand;
          // console.log(this.brand + "   added");------------------------------
        }
      }
    },
  },
  //hook---------------------------------------
  mounted() {
    this.update_med();
  },

  //hooks------------------------------------------
};
</script>
