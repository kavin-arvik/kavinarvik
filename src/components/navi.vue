<template>
  <v-app>
    <v-app-bar app color="primary" dark height="90">
      <div class="d-flex align-center">
        
        <v-img contain width="80" transition="scale-transition"
          src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg"
        />  
        <h2 class="font-weight-black">TRuMed</h2>

      </div>

      <v-spacer></v-spacer>

      <div>
        <v-tabs background-color="#00BFA5" show-arrows  variant="elevated">
      
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab v-for="item in items" :key=  "item.title" class="pa-2" outlined link :to="item.route">
          <v-icon>{{ item.icon }}</v-icon>
          {{  item.title  }}
      </v-tab>
    </v-tabs>
        <!-- <v-btn color="white" @click="login" outlined>
          <v-icon>mdi-login-variant</v-icon>
        <span class="log">Log in</span>
      </v-btn>

      <v-btn color="white" outlined>
        <v-icon>mdi-view-dashboard</v-icon>
        <span class="log">Dashboard</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-account-check</v-icon>
        <span class="log">Login History</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-chart-histogram</v-icon>
        <span class="log">Add User</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-login-variant</v-icon>
        <span class="log">Stock View</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-truck-fast</v-icon>
        <span class="log">Stock Entry</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-cash-multiple</v-icon>
        <span class="log">Bill Entry</span>
      </v-btn>
      
      <v-btn color="white" @click="login" outlined>
        <v-icon>'mdi-clipboard-text'</v-icon>
        <span class="log">Sales Report</span>
      </v-btn>

      <v-btn color="white" @click="login" outlined>
        <v-icon>mdi-logout-variant</v-icon>
        <span class="log">log-out</span>
      </v-btn> -->

      </div>
      
        <!-- <v-card class="d-flex justify-space-around mb-1 amber darken-2">
    
      <v-card v-for="item in items" :key="item.title" class="pa-2" outlined link @click="click" :to="items.route">
        
                 <v-icon>{{ item.icon }}</v-icon>
              
                 <v-spacer></v-spacer>

              
                 <v-list-item-title>{{ item.title }}</v-list-item-title>
  <v-btn text @click="login">
        <span class="log">Log in</span>
      </v-btn>
      </v-card>
    </v-card> -->
      <!-- <v-btn text @click="login"  v-for="item in items" :key="item.title" outlined link>
        <span class="amber darken-2 pa-2">{{ item.title }} </span>
      </v-btn> -->
     
        
      <!-- <v-btn text @click="login">
        <span class="log">Log in</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="login">
        <span class="log">Log in</span>
      </v-btn> -->
      
    </v-app-bar>

    <v-main>
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data(){
    return{
      items: [
                  // { title: 'log-in', icon: 'mdi-login-variant', route:"/"},
                  { title: 'Dashboard', icon: 'mdi-view-dashboard', route:"/Dashboard"},
                  { title: 'Login History', icon: 'mdi-account-check', route:"/Login_history"},
                  { title: 'Add User', icon: 'mdi-account-multiple-plus', route:"/Add_user"},
                  { title: 'Stock View', icon: 'mdi-chart-histogram', route:"/Stock_view"},
                  { title: 'Stock Entry', icon: 'mdi-truck-fast', route:"/Stock_entry"},
                  { title: 'Bill Entry', icon: 'mdi-cash-multiple', route:"/Bill_entry"},
                  { title: 'Sales Report', icon: 'mdi-clipboard-text',route:"/Sales_report"},
                  { title: 'log-out', icon: 'mdi-logout-variant', route:"/"},
             ],
    }
  },
  
  // methods:{
  //   login(){
  //     this.$router.push('/login')
  //   },
  // },


};
</script>
