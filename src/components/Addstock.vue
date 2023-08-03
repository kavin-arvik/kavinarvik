<template>
  <div class="root">
    <!-- component -->
    <div class="text-center">
      <v-dialog v-model="hide" width="400">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" dark v-bind="attrs" v-on="on">+ ADD</v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            ADD STOCK
            <v-spacer></v-spacer>
            <v-icon @click="close">mdi-close-box</v-icon>
          </v-card-title>

          <v-card-text>
            <!-- <v-btn  color="grey" variant="elevated" block>X ADD STOCK</v-btn> -->
            <v-text-field
              v-model="med"
              class="mt-9"
              outlined
              placeholder="Medicine Name"
            ></v-text-field>
            <br />

            <v-text-field
              class="mb-1"
              v-model="brand"
              outlined
              placeholder="Brand"
            ></v-text-field>
            <br />

            <v-btn
              block
              color="#00BFA5"
              type="submit"
              variant="elevated"
              @click="add"
              >ADD</v-btn
            >
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn> -->
          <snack :obj="Obj" />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import snack from "@/components/snackbar.vue";
export default {
  components: {
    snack,
  },
  data() {
    return {
      // medName:"",
      // Brand:"",
      hide: false,
      med: "",
      brand: "",
      MedicineName: "",
      addStock: {},
      //snack
      Obj: {
      snackbar: false,
      text: "",
      topvar: false,
      bottomvar: false,
      color: "red",
    },

      med_master: this.$store.state.MedicineMaster,
    };
  },

  methods: {
    add() {
      // this.medName=this.med;
      // this.Brand=this.brand;
      let temp = true;
      if (this.med != "" && this.brand != "") {
        for (let i = 0; i < this.med_master.length; i++) {
          if (
            this.med == this.med_master[i].Medicinename &&
            this.brand == this.med_master[i].Brand
          ) {
            // console.log(temp);
            temp = false;
            // console.log(this.addStock);--------------------------
            // console.log(temp);
            break;
          }
        }
        if (temp == true) {
          this.addStock = {
            Medicinename: this.med,
            Brand: this.brand,
          };
          this.$store.state.MedicineMaster.push(this.addStock);
          //----------------------------------------
          this.Obj = {
            snackbar: true,
            text: "Stocks added successfully",
            topvar: false,
            bottomvar: true,
            color: "success",
          };
          // temp=true;
        } else {
          // alert("already exists");
          this.Obj = {
            snackbar: true,
            text: "Stock already exists",
            topvar: false,
            bottomvar: true,
            color: "error",
          };
        }
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
      this.med = "";
      this.brand = "";
      // this.$store.commit('add_Stock', this.addStock);
      // this.$store.state.Stock.push(this.addMedicine);
      // this.$store.state.MedicineMaster.push(this.addBrand);
      // this.$store.commit('addMedicine', this.addMedicine)
      // this.$store.commit('addBrand', this.addBrand)
      this.$emit("signal", this.addStock);
      //emit-------------------------------------
    },

    close() {
      this.hide = false;
    },
  },
};
</script>
