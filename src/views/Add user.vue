<template>
  <div>
    <v-container>
      <v-expansion-panels class="d-flex pa-7">
        <!-- <v-text class=" blue--text text--darken-4 text-h4 mb-8">Add User</v-text> -->
        <v-expansion-panel>
          <v-expansion-panel-header
            class="white--text text--darken-4 primary text-h4"
            >Item</v-expansion-panel-header
          >
          <v-expansion-panel-content class="grey lighten-3">
            <v-row class="mt-9">
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="userid"
                  label="User-id"
                  placeholder="Enter your user-id"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field
                  v-model="password"
                  label="Password"
                  placeholder="Enter your password"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-select
                  outlined
                  label="Role"
                  v-model="role"
                  :items="items"
                ></v-select>
              </v-col>

              <v-col class="mt-3">
                <v-btn color="#00BFA5" variant="elevated" @click="addbtn1"
                  >ADD</v-btn
                >
              </v-col>
            </v-row>
            <snack :obj="Obj" />
            <!-- {{ this.$store.state.Login }} -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
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
      items: ["biller", "manager", "system admin", "inventry"],
      userid: "",
      password: "",
      role: "",
      addDetails: {},
      //Snackbar---
      Obj: {
        snackbar: false,
        text: "",
        topvar: false,
        bottomvar: false,
        color: "red",
      },
    };
  },

  methods: {
    // add() {
    //   let temp = true;
    //   for (let i = 0; i < this.$store.state.Login.length; i++) {
    //     if (this.userid != this.$store.state.Login[i].userid) {
    //       if (
    //         this.password == this.$store.state.Login[i].password ||
    //         this.role == this.$store.state.Login[i].role
    //       ) {
    //         temp = false;
    //         // console.log("temp value :   " + temp);----------------------
    //         // console.log("Already exists");-------------------------------
    //         break;
    //       }
    //       // alert('Already exists')
    //     }
    //   }
    // } else {
    //   this.addDetails = {
    //     userid: this.userid,
    //     password: this.password,
    //     role: this.role,
    //   };
    //   this.$store.state.Login.push(this.addDetails);
    // //   this.$store.commit();
    // }
    //   if (temp) {
    //     this.addDetails = {
    //       userid: this.userid,
    //       password: this.password,
    //       role: this.role,
    //     };
    //     this.$store.state.Login.push(this.addDetails);
    //   } else {
    //     alert("already exists");
    //   }
    // },
    // addbtn() {
    //   // let val = true;
    //   let value1 = true;
    //   for (let i = 0; i < this.$store.state.Login.length; i++) {
    //     if (
    //       this.userid != this.$store.state.Login[i].userid &&
    //       (this.password == this.$store.state.Login[i].password &&
    //         this.role == this.$store.state.Login[i].role)
    //     ) {

    //       alert('not Exists 123=====' +i);
    //       break;
    //     } else {
    //       value1 = false;
    //     }
    //   }

    //   if (value1 == false) {
    //     alert("already exists");
    //   } else {
    //     this.addDetails = {
    //       userid: this.userid,
    //       password: this.password,
    //       role: this.role,
    //     };
    //     this.$store.state.Login.push(this.addDetails);
    //     alert('Added');
    //   }
    // },

    //add button works here;---------------------------------------------------
    addbtn1() {
      let comp = true;
      if (this.userid != "" && this.password != "" && this.role != "") {
        for (let i = 0; i < this.$store.state.Login.length; i++) {
          if (this.userid == this.$store.state.Login[i].userid) {
            comp = true;
            break;
          } else {
            comp = false;
          }
        }

        if (comp) {
          console.log("");
          this.Obj = {
            snackbar: true,
            text: "User already exists",
            topvar: false,
            bottomvar: true,
            color: "error",
          };
        } else {
          // for (let i = 0; i < this.userid.length; i++) {
          //    if(this.userid[i]==" ")
          // }
          // console.log("not exists");
          this.addDetails = {
            userid: this.userid,
            password: this.password,
            role: this.role,
          };
          this.$store.state.Login.push(this.addDetails);
          this.userid = "";
          this.password = "";
          this.role = "";
          this.Obj = {
            snackbar: true,
            text: "User added successfully",
            topvar: false,
            bottomvar: true,
            color: "success",
          };
        }
      } else {
        this.Obj = {
          snackbar: true,
          text: "Enter the data properly",
          topvar: false,
          bottomvar: true,
          color: "error",
        };
      }
    },
  },
};
</script>
