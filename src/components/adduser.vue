<!-- 
<template>

<v-expansion-panels class="d-flex pa-10">
    <v-expansion-panel>
          
        <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
           
            <v-row>
            <v-col  cols="12" md="3">
                <v-text-field v-model="userid" label="User-id"
                placeholder="Enter your user-id" outlined></v-text-field>
            </v-col>
        
            <v-col cols="12" md="3">
                <v-text-field v-model="password" label="Password" 
                placeholder="Enter your password" outlined></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
               <v-select outlined label="Role" v-model="role" :items="items"></v-select>
            </v-col>

            <v-col>
                <v-btn  color="#00BFA5" variant="elevated" @click="add">ADD</v-btn>
            </v-col>
           </v-row>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
  </template>

<script>
export default{
    data(){
        return{
            items:["biller", "manager", "system admin", "inventry"],
            userid:"",
            password:"",
            role:"", 
            addDetails:{},
        }
    },

    methods:{
        add(){
            for(let i=0; i<this.$store.state.Login.length; i++){
                if(this.userid == this.$store.state.Login[i].userid && this.password == this.$store.state.Login[i].password && this.role == this.$store.state.Login[i].role){
                    // alert('Already exists')
                    // console.log("Already exists");------------------
                    break;
            }else{
                this.addDetails={
                    userid:this.userid,
                    password:this.password,
                    role:this.role,
                }
                this.$store.state.Login.push(this.addDetails)   
                this.$store.commit()       
            }

        }
    }
}
}
</script> -->