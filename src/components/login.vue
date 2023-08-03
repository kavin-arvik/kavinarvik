<template>
  <div>
    <v-sheet class="pa-12 mt-12 grey lighten-1" rounded>
      <v-card
        class="mx-auto px-6 py-6 grey lighten-3"
        max-width="360"
        d-flex
        elevation="7"
      >
      
        <v-card-title class="white--text text--darken-4 primary text-h4 mb-7"
          >Log-In</v-card-title
        >
        <!-- {{ "66666666666" }}
      {{ prop_button }} -->
        <v-form v-model="form" ref="form">
          <v-text-field
            v-model="userid"
            :readonly="loading"
            class="mb-2"
            label="User-id"
            placeholder="Enter your user-id"
          ></v-text-field>
          <br />
          <v-text-field
            v-model="password"
            :readonly="loading"
            label="Password"
            placeholder="Enter your password"
            type="password"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="prop_button"
            :loading="loading"
            block
            color="#00BFA5"
            size="large"
            variant="elevated"
            @click="login"
            class="mt-5"
          >
            Log In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
    <snack :obj="Obj" />
    <!-- {{ this.$store.state.LoginHistory }} -->
    <br />
    <!-- {{ "*******************" }} -->
    <!-- {{  this.$store.state.Login }} -->
    <!-- <navi v-show="display"></navi> -->
  </div>
</template>
<!--   
    <script setup>
        import { ref } from 'vue'
        const form = ref(false)
        const email = ref(null)
        const password = ref(null)
        const loading = ref(false)
        function onSubmit () {
        if (!form.value) return
        loading.value = true
        setTimeout(() => (loading.value = false), 2000)
        }
        function required (v) {
        return !!v || 'Field is required'
        }
    </script> -->

<script>
import snack from "@/components/snackbar.vue";
// import navi from "@/components/navi.vue"

export default {
  name: "login",
  components: {
    snack,
  },
  //------------------------------
  props: {
    prop_button: Boolean,
  },
  //------------------------------
  data: () => ({
    form: false,
    userid: "",
    password: null,
    loading: false,
    disab: true,
    // display: false,
    dt: "",
    time: "",
    date_tm: {},
    boolean: true,
    role: "",
    DashDetails: {},
    //Snackbar---
    Obj: {
      snackbar: false,
      text: "",
      topvar: false,
      bottomvar: false,
      color: "red",
    },
  }),

  // if (this.userid != "" && this.password != "") {
  //       this.disab = true;
  //     } else{
  //       this.disab = false;
  //     }
  watch: {
    password(val)  {
      if (val != "") {
        // this.disab = false;
        this.$emit("signall", false)
      } else {
        // this.disab = true;
        this.$emit("signall", true)

      }
    },
    // password(val) {
    //   if (val != "") {
    //     this.disab = false;
    //   }
    // },
  },
  // beforeMount() {
  //   this.disab = true;
  // },
  methods: {
    // onSubmit() {
    //   if (!this.form) return;
    //   this.loading = true;
    //   setTimeout(() => (this.loading = false), 2000);
    // },
    // required(v) {
    //   return !!v || "Field is required";
    // },
    // mounted() {

    // },
    login() {
      for (let i = 0; i < this.$store.state.Login.length; i++) {
        this.boolean = false;
        if (
          this.userid == this.$store.state.Login[i].userid &&
          this.password == this.$store.state.Login[i].password
        ) {
          // console.log("working");
          // this.display = true;
          // alert("log-in Successfull");
          // console.log("working");-----------------

          let d = new Date();
          // console.log(d.toLocaleTimeString('en-US'));
          // let date = d.getDate();
          // let mon = d.getMonth();
          // let yr = d.getFullYear();
          // let hr = d.getHours();
          // let min = d.getMinutes();

          this.dt = new Date().toJSON().slice(0, 10);

          this.time = d.toLocaleTimeString("en-US");

          this.date_tm = {
            Name: this.userid,
            Login: this.time,
            Logout: "Active",
            Date: this.dt,
          };
          // this.date_tm.Name = this.userid;
          // this.date_tm.Login = this.time;
          // this.date_tm.logout = "";
          // this.date_tm.Date = this.dt;
          this.$store.commit("setLoginHistory", this.date_tm);
          // alert("log-in Successfull");

          this.boolean = false;
          // console.log("success");

          for (let index = 0; index < this.$store.state.Login.length; index++) {
            if (this.userid == this.$store.state.Login[index].userid) {
              this.role = this.$store.state.Login[index].role;
              this.$emit("alertt", this.role);
              //For Dashboard storing---------------------------------
              // this.grt_role = {
              //   role: this.role,
              // };
              // this.$store.state.Dashboard.push(this.role);
              this.DashDetails = { role: this.role, userid: this.userid };
              this.$store.commit("getDashDetails", this.DashDetails);
              console.log("role from dashboard");
              console.log(this.role);
              console.log(this.userid);
              console.log("_------------");
              console.log(this.$store.state.Dashboard.role);
              console.log(this.$store.state.Dashboard.userid);

              //to null the input fields
              this.userid = "";
              this.password = "";
              this.$router.push("/Dashboard");
            }
          }
          // this.boolean = e;
          break;
          //-------------------------------------------------------------------------------------
        }
        //  else if (
        //   this.userid != this.$store.state.Login[i].userid ||
        //   this.password != this.$store.state.Login[i].password
        // ) {
        //   this.Obj = {
        //     snackbar: true,
        //     text: "log-in failed",
        //     topvar: false,
        //     bottomvar: true,
        //     color: "error",
        //   };
        //   break;
        //   // alert("log-in failed");DashDetails
        //   // console.log("failed");--------------
        //   // this.display = false;
        // }
        //-------------------------------------------------------------------------------------
      }

      // this.boolean = false;
      //if-block ends
      if (this.boolean) {
        alert("log-in Successfull");
        console.log("success");
      } else {
        // console.log("failed");
        // alert("enter the valid data");
        this.Obj = {
          snackbar: true,
          text: "Enter the correct data--",
          topvar: false,
          bottomvar: true,
          color: "error",
        };
        this.userid = "";
        this.password = "";
      }
      //To reset the form-------------------------------
      this.$refs.form.reset();
    },
  },

};
</script>
