<template>
  <div id="app">
    <!-- view -->
    <!-- {{  medName  }} -->
    <v-app id="inspire" class="d-flex pa-10 grey lighten-1">
      <v-card>
        <v-card-title  class=" blue--text text--darken-4 text-h4 grey lighten-3">
          Stock View
          <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              ></v-text-field>
  
        </v-card-title>
  
        <v-data-table :headers="headers" :items="item" :search="search" class="grey lighten-3"></v-data-table>
      </v-card>
      <!-- {{ "item array==" }}
      {{ item }} -->
    </v-app>
  </div>
  </template>
  
  <script>
  export default{
    // mounted:{
    //     for(let i=0, i<getStock.length; i++){
    //         if(this.getStock[i].MedicineName == this.getBrand[i].Medicinename){
    //           this.medName=this.getStock[i].MedicineName;
    //           this.brand=this.getBrand[i].Brand;
    //           this.qty=this.getStock[i].Quatity;
    //           this.unitPrice=this.getStock[i].UnitPrice; 
    //         }
    //     }
    // },
      data () {
      return {
        medName:'',
        brand:'',
        qty:'',
        UnitPrice:'',
        search: '',
        headers: [
          { text: 'Medicine Name', value: 'medName' },
          { text: 'Brand', value: 'brand' },
          { text: 'Quatity', value: 'qty' },
          { text: 'Unit Price', value: 'UnitPrice' },
        ],
        // medName:this.$store.state.Stock[0].MedicineName,
        // item: this.$store.state.Stock,
       
        getStock:this.$store.state.Stock,
        getBrand:this.$store.state.MedicineMaster,
        
        item: [],
        // str:{medName:'',brand:'',qty:'',UnitPrice:''},
        str:{}
      }
    },

  beforeMount(){
    for(let i=0; i<this.getStock.length; i++){
      for(let j=0; j<this.getBrand.length; j++){
      if(this.getStock[i].MedicineName == this.getBrand[j].Medicinename){
          this.brand=this.getBrand[j].Brand;
          this.medName=this.getStock[i].MedicineName;
          this.qty=this.getStock[i].Quantity;
          this.UnitPrice=this.getStock[i].UnitPrice; 
        }
        this.str={
          medName:this.medName,
          brand:this.brand,
          qty:this.qty,
          UnitPrice:this.UnitPrice,
        }
        // console.log(this.str);------------------------------
      }
          // this.str.medName=this.medName;
          // this.str.brand=this.brand;
          // this.str.qty=this.qty;
          // this.str.UnitPrice=this.UnitPrice;
          // console.log("****************************",this.str);

          this.item.push(this.str);
          // console.log(this.item);----------------------

        
      }
    },


    
  
  }


  </script>
  