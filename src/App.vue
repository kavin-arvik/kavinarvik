<template>
  <v-app>
    <v-app-bar app color="primary" dark height="110">
      <div class="d-flex align-center">
        <v-img
          contain
          width="80"
          transition="scale-transition"
          src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg"
        />
        <h2 class="font-weight-black ml-2">{{ "TRuMed" }}</h2>
      </div>
      <v-spacer></v-spacer>

      <div>
        <v-tabs background-color="#00BFA5" show-arrows variant="elevated">
          <v-tabs-slider color="teal lighten-2"></v-tabs-slider>
          <v-tab
            v-for="item in items"
            :key="item.title"
            class="pa-6"
            outlined
            link
            :to="item.route"
          >
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-tab>
        </v-tabs>

        <!-- <v-tabs background-color="#00BFA5" show-arrows  variant="elevated" v-if="this.role='manager'">
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item.title" class="pa-2" outlined link :to="item.route">
            <v-icon>{{ item.icon }}</v-icon>
            {{  item.title  }}
            </v-tab>
        </v-tabs>
        <v-tabs background-color="#00BFA5" show-arrows  variant="elevated" v-if="this.role='system admin'">
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item.title" class="pa-2" outlined link :to="item.route">
            <v-icon>{{ item.icon }}</v-icon>
            {{  item.title  }}
            </v-tab>
        </v-tabs>
        <v-tabs background-color="#00BFA5" show-arrows  variant="elevated" v-if="this.role='inventry'">
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item.title" class="pa-2" outlined link :to="item.route">
            <v-icon>{{ item.icon }}</v-icon>
            {{  item.title  }}
            </v-tab>
        </v-tabs> -->

        <!-- <v-btn color="teal lighten-2" class="ml-10">Log-Out</v-btn> -->
      </div>
      <!-- <v-btn color="teal lighten-2" class="ml-10" v-show="!hide" @click="logout"
        >Log-Out</v-btn
      > -->
      <v-dialog v-model="dialog" persistent max-width="390" v-show="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal lighten-2" class="ml-10" v-show="!hide" dark v-bind="attrs" v-on="on">
              Log-Out
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5"> Log Out </v-card-title>
            <v-card-text class="text-h6">Are you sure, you want to Logout? </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="dialog = false">
                No
              </v-btn>
              <v-btn color="teal lighten-2" text @click="logout">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      <!-- <v-btn color="white" @click="login" outlined>
          <v-icon>mdi-login-variant</v-icon>
        <span class="log">Log in</span>
      </v-btn>

      <v-btn color="white" outlined>
        <v-icon>mdi-view-dashboard</v-icon>
        <span class="log">Dashboard</span>
      </v-btn>
change1
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

    <v-main class="grey lighten-1">
      <router-view v-show="!hide" />
      <v-container class="grey lighten-1">
      <!-- ------------------------------ -->
        <login @alertt="get_role" v-show="hide" :prop_button="this.button" @signall="change1"/>
        <!-- :prop_button="this.button" -->
        <!-- ----------------------------- -->
        <!-- <h1>{{ role }}</h1> -->
        <!-- <logout/> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import login from "@/components/login.vue";
// import logout from "@/components/dialog_logout.vue";

export default {
  name: "App",
  // props: {
  //   dialog: Boolean,
  // },
  data() {
    return {
      role: "",
      login: "",
      items: [],
      val: true,
      dt: "",
      time: "",
      date_tm: {},
      hide: true,
      exit: true,
      dialog : false,
      login_history: this.$store.state.LoginHistory,
      //----------------------------------------
      button:true
    };
  },

  components: {
    login,
  },
  // methods:{
  //   login(){
  //     this.$router.push('/login')
  //   },
  // },
  methods: {
    get_role(r) {
      this.role = r;
      // console.log(this.role);
      this.hide = false;
    },
    change1(val1){
      this.button = val1;//false
      // console.log("------button----------");
      // console.log(this.button)
    },

    logout() {
      let d = new Date();
      this.time = d.toLocaleTimeString("en-US");

      for (let i = 0; i < this.login_history.length; i++) {
        if (this.login_history[i].Logout == "Active") {
          this.login_history[i].Logout = this.time;
        }
      }
      // this.date_tm.logout = this.time;
      // console.log(this.time);-------------------------------
      // console.log(this.date_tm.logout);
      // this.$store.commit("set_Log_out", this.date_tm);
      // alert("logout-successfull");
      this.role = "";

     this.$store.state.Dashboard.userid = "";
     this.$store.state.Dashboard.role = "";
     //--------------------------------------------
    //  this.button = false
     //-------------------------------------------
      // console.log(this.role);-----------------------------
      this.$router.push("/");
      this.dialog = false;
      this.hide = !this.hide;
      this.val = true;
      this.button=true
    },
  },

  watch: {
    role() {
      if (this.role == "biller") {
        this.items = [
          {
            title: "Dashboard",
            icon: "mdi-view-dashboard",
            route: "/Dashboard",
          },
          {
            title: "Stock View",
            icon: "mdi-chart-histogram",
            route: "/Stock_view",
          },
          {
            title: "Bill Entry",
            icon: "mdi-cash-multiple",
            route: "/Bill_entry",
          },
          // { title: 'log-out',
          // icon: 'mdi-logout-variant',
          // route:"/"}
        ];
      } else if (this.role == "manager") {
        this.items = [
          {
            title: "Dashboard",
            icon: "mdi-view-dashboard",
            route: "/Dashboard",
          },
          {
            title: "Stock Entry",
            icon: "mdi-truck-fast",
            route: "/Stock_entry",
          },
          {
            title: "Stock View",
            icon: "mdi-chart-histogram",
            route: "/Stock_view",
          },
          {
            title: "Sales Report",
            icon: "mdi-clipboard-text",
            route: "/Sales_report",
          },

          // { title: 'log-out', icon: 'mdi-logout-variant', route:"/"}
        ];
      } else if (this.role == "system admin") {
        this.items = [
          {
            title: "Dashboard",
            icon: "mdi-view-dashboard",
            route: "/Dashboard",
          },
          {
            title: "Add User",
            icon: "mdi-account-multiple-plus",
            route: "/Add_user",
          },
          {
            title: "Login History",
            icon: "mdi-account-check",
            route: "/Login_history",
          },

          // { title: 'log-out', icon: 'mdi-logout-variant', route:"/"}
        ];
      } else if (this.role == "inventry") {
        this.items = [
          {
            title: "Dashboard",
            icon: "mdi-view-dashboard",
            route: "/Dashboard",
          },
          {
            title: "Stock Entry",
            icon: "mdi-truck-fast",
            route: "/Stock_entry",
          },
          {
            title: "Stock View",
            icon: "mdi-chart-histogram",
            route: "/Stock_view",
          },

          // { title: 'log-out', icon: 'mdi-logout-variant', route:"/"}
        ];
      } else {
        //to empty the array for hiding the Navigation Bars
        this.items = [];
      }
    },
  },

  //  [ // { title: 'log-in', icon: 'mdi-login-variant', route:"/"},
  //               { title: 'Dashboard', icon: 'mdi-view-dashboard', route:"/Dashboard"},
  //               { title: 'Login History', icon: 'mdi-account-check', route:"/Login_history"},
  //               { title: 'Add User', icon: 'mdi-account-multiple-plus', route:"/Add_user"},
  //               { title: 'Stock View', icon: 'mdi-chart-histogram', route:"/Stock_view"},
  //               { title: 'Stock Entry', icon: 'mdi-truck-fast', route:"/Stock_entry"},
  //               { title: 'Bill Entry', icon: 'mdi-cash-multiple', route:"/Bill_entry"},
  //               { title: 'Sales Report', icon: 'mdi-clipboard-text',route:"/Sales_report"},
  //               { title: 'log-out', icon: 'mdi-logout-variant', route:"/"},]
};
</script>
