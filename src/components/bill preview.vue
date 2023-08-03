<template>
    <div class="root">
  
   <div class="text-center">
     <v-dialog width="600" v-model="hide">
 
       <template v-slot:activator="{ on, attrs }">

         <v-btn  class="teal"  v-bind="attrs"  v-on="on">PREVIEW</v-btn>

       </template>
 
       <v-card>
         <v-card-title class="text-h5" >PREVIEW
             
             <v-spacer></v-spacer>
             <v-icon @click="close">mdi-close-box</v-icon>
           </v-card-title>
 
        <v-card>
        <v-card-title class="ml-16">TRuMed medical shop</v-card-title>
            <v-data-table :headers="headers" :items="item" :search="search"></v-data-table>
        </v-card>
 
         <v-divider></v-divider>
 
         <v-card-actions>
           <v-spacer></v-spacer>

         </v-card-actions>

         <v-row class="ml-16">
              <v-col>{{ "Total: Rs"+" "+total }}</v-col>
           </v-row>
           <v-row  class="ml-16">
            <v-col>{{ "GST: Rs"+" "+Gst }}</v-col>
          </v-row>

           <v-row  class="ml-16">
            <v-col>{{ "Net Price: Rs"+" "+N_pay }} </v-col>
          </v-row>

          <v-row  class="ml-16">
            <v-btn class="teal"  @click="close">PRINT</v-btn>
          </v-row>

       </v-card>
     </v-dialog>
   </div>
    </div>
 
 </template>

<script>
export default{

  props:{
    get_arr : [], 
    total : Number,
    Gst:Number,
    N_pay:Number,
  },
    data () {
    return {
      hide:false,
      search: '',
      headers: [
        { text: 'Medicine name', value: 'med_name' },
        { text: 'Qty', value: 'med_qty' },
        { text: 'Amount', value: 'med_amt' },
      ],
      item:[],
      
      // item: [
      //   {
      //     med: 'Crosin',
      //     qty: 10,
      //     value: 50,
      //   },
      //   {
      //     med: 'Dolo',
      //     qty: 5,
      //     value: 100,
      //   },
      // ],
    }
  },

  watch:{
        get_arr(){
          this.item = this.get_arr;
        },
      },

  methods:{
    close(){
      this.hide=false;
    }
  },

}

</script>