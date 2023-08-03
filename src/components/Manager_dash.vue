<template>
 <div>
    <!-- Today's Sales -->
    <div>
    <div class="d-flex justify-center mt--1 ">
      <v-card class="mx-auto grey lighten-3" elevation="7" filled outlined max-width="500">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="blue--text text--darken-4 text-h2 mb-1">
              {{ "Today sales" }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-h2 ml-3 grey lighten-3">
              <span>&#8377;</span>
              {{ todayTotal }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>

  <!-- Current Inventry value -->
  <div>
    <div class="d-flex justify-center mt-12">
      <v-card class="mx-auto grey lighten-3" elevation="7" filled outlined max-width="600" color="">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="blue--text text--darken-4 text-h2 mb-1">
              {{ "Current Inventry value" }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-h2 ml-3"><span>&#8377;</span>
              {{ inventVal }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>

 </div>

</template>

<script>
export default {
  data() {
    return {
      // rupeeIcon : "&#8377",
      todayDate: new Date().toJSON().slice(0, 10),
      // getNetPrice : this.$store.state.BillMaster.Netprice,
      BillMaster: this.$store.state.BillMaster,
      LoginHistory: this.$store.state.LoginHistory,
      todayTotal: 0,
      Stock : this.$store.state.Stock,
      qty : 0,
      unitPrice : 0,
      inventVal : 0,
    };
  },
    beforeMount() {
    // console.log(this.getNetPrice);
    this.todaySales();
    this.inventValue();
  },

  methods: {
    todaySales() {
      for (let i = 0; i < this.BillMaster.length; i++) {
        console.log("1");
        if (this.todayDate == this.BillMaster[i].BillDate) {
          console.log("2");
            this.todayTotal += this.BillMaster[i].Netprice;
            this.todayTotal = Math.round(this.todayTotal)
            console.log("Today");
            console.log(this.todayTotal);
        }
      }
    },

    inventValue(){
        for(let i=0; i<this.Stock.length; i++){
            this.inventVal += this.Stock[i].Quantity * this.Stock[i].UnitPrice 
            console.log(this.inventVal);
        }
    },
 
  },
};
</script>