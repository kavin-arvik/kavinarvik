<template>
  <div id="app">
    <v-card class="grey lighten-3">
      <v-card-title> 
        <!-- <v-spacer></v-spacer> -->
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="item"
        :search="search"
        class="grey lighten-3"
      ></v-data-table>
    </v-card>
    <!-- {{ 'sales bill arr' }} -->
    <!-- {{ sales_bill }} -->
  </div>
</template>

<script>
export default {
  props: {
    sales_bill: [],
  },

  data() {
    return {
      search: "",
      headers: [
        { text: "Bill No", value: "billno" },
        { text: "Bill Date", value: "billdate" },
        { text: "Medicine Name", value: "medname" },
        { text: "Qty", value: "qty" },
        { text: "Amount", value: "amt" },
      ],

      item: [],
      //   {
      //     billno: this.sales_bill.billno,
      //     billdate: this.sales_bill.billdate,
      //     medname: this.sales_bill.medname,
      //     qty: this.sales_bill.qty,
      //     amt: this.sales_bill.amt,
      //   },
      // ],
    };
  },
  watch: {
    sales_bill() {
        this.item = this.sales_bill;
    },
  },
};
</script>
