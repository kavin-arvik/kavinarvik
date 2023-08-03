<template>
    <div id="app">
     <v-container>
      <!-- <v-app id="inspire" class="d-flex " > -->
        <v-card>
          <v-card-title class=" blue--text text--darken-4 text-h4 grey lighten-3">
            Bill Entry
            <!-- {{ get_arr }} -->
            <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
    
          </v-card-title>
        
          <v-data-table :headers="headers" :items="item" :search="search" class="grey lighten-3"></v-data-table>
        </v-card>
      <!-- </v-app>   -->
     </v-container>
    </div>
    </template>
    
    <script>
    export default{

      props:{
        // get_medName : String,
        // get_brand : String,
        // get_qty : Number,
        get_arr : [],
      },

        data () {
        return {
          search: '',
          headers: [
            { text: 'Medicine Name', value: 'med_name'},
            { text: 'Brand', value: 'med_brand'},
            { text: 'Quantity', value: 'med_qty'},
            { text: 'Amount', value: 'med_amt'},
          ],
          item:[],
          // item: [],
            // {
            //   medName: this.get_arr.med_name,
            //   brand: this.get_arr.med_brand,
            //   qty: this.get_arr.med_qty,
            //   // unitPrice:'2',
            // },
         

        }
      },

      watch:{
        get_arr(){
          this.item = this.get_arr;
        }
      },
    }

    </script>